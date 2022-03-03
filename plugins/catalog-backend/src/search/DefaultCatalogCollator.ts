/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  PluginEndpointDiscovery,
  TokenManager,
} from '@backstage/backend-common';
import {
  Entity,
  stringifyEntityRef,
  UserEntity,
} from '@backstage/catalog-model';
import { Config } from '@backstage/config';
import {
  CatalogApi,
  CatalogClient,
  GetEntitiesRequest,
} from '@backstage/catalog-client';
import {
  catalogEntityReadPermission,
  CatalogEntityDocument,
} from '@backstage/plugin-catalog-common';

export class DefaultCatalogCollator {
  protected discovery: PluginEndpointDiscovery;
  protected locationTemplate: string;
  protected filter?: GetEntitiesRequest['filter'];
  protected readonly catalogClient: CatalogApi;
  public readonly type: string = 'software-catalog';
  public readonly visibilityPermission = catalogEntityReadPermission;
  protected tokenManager: TokenManager;

  static fromConfig(
    _config: Config,
    options: {
      discovery: PluginEndpointDiscovery;
      tokenManager: TokenManager;
      filter?: GetEntitiesRequest['filter'];
    },
  ) {
    return new DefaultCatalogCollator({
      ...options,
    });
  }

  constructor(options: {
    discovery: PluginEndpointDiscovery;
    tokenManager: TokenManager;
    locationTemplate?: string;
    filter?: GetEntitiesRequest['filter'];
    catalogClient?: CatalogApi;
  }) {
    const { discovery, locationTemplate, filter, catalogClient, tokenManager } =
      options;

    this.discovery = discovery;
    this.locationTemplate =
      locationTemplate || '/catalog/:namespace/:kind/:name';
    this.filter = filter;
    this.catalogClient =
      catalogClient || new CatalogClient({ discoveryApi: discovery });
    this.tokenManager = tokenManager;
  }

  protected applyArgsToFormat(
    format: string,
    args: Record<string, string>,
  ): string {
    let formatted = format;
    for (const [key, value] of Object.entries(args)) {
      formatted = formatted.replace(`:${key}`, value);
    }
    return formatted.toLowerCase();
  }

  private isUserEntity(entity: Entity): entity is UserEntity {
    return entity.kind.toLocaleUpperCase('en-US') === 'USER';
  }

  private getDocumentText(entity: Entity): string {
    let documentText = entity.metadata.description || '';
    if (this.isUserEntity(entity)) {
      if (entity.spec?.profile?.displayName && documentText) {
        // combine displayName and description
        const displayName = entity.spec?.profile?.displayName;
        documentText = displayName.concat(' : ', documentText);
      } else {
        documentText = entity.spec?.profile?.displayName || documentText;
      }
    }
    return documentText;
  }

  async execute() {
    const { token } = await this.tokenManager.getToken();
    const response = await this.catalogClient.getEntities(
      {
        filter: this.filter,
      },
      { token },
    );
    return response.items.map((entity: Entity): CatalogEntityDocument => {
      return {
        title: entity.metadata.title ?? entity.metadata.name,
        location: this.applyArgsToFormat(this.locationTemplate, {
          namespace: entity.metadata.namespace || 'default',
          kind: entity.kind,
          name: entity.metadata.name,
        }),
        text: this.getDocumentText(entity),
        componentType: entity.spec?.type?.toString() || 'other',
        namespace: entity.metadata.namespace || 'default',
        kind: entity.kind,
        lifecycle: (entity.spec?.lifecycle as string) || '',
        owner: (entity.spec?.owner as string) || '',
        authorization: {
          resourceRef: stringifyEntityRef(entity),
        },
      };
    });
  }
}
