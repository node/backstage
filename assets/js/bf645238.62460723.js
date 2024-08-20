/*! For license information please see bf645238.62460723.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[86400],{822776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(824246),c=t(511151);const r={id:"using-cloud-storage",title:"Using Cloud Storage for TechDocs generated files",description:"Using Cloud Storage for TechDocs generated files"},s=void 0,a={id:"features/techdocs/using-cloud-storage",title:"Using Cloud Storage for TechDocs generated files",description:"Using Cloud Storage for TechDocs generated files",source:"@site/../docs/features/techdocs/using-cloud-storage.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/using-cloud-storage",permalink:"/docs/features/techdocs/using-cloud-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/using-cloud-storage.md",tags:[],version:"current",frontMatter:{id:"using-cloud-storage",title:"Using Cloud Storage for TechDocs generated files",description:"Using Cloud Storage for TechDocs generated files"},sidebar:"docs",previous:{title:"TechDocs Configuration Options",permalink:"/docs/features/techdocs/configuration"},next:{title:"Configuring CI/CD to generate and publish TechDocs sites",permalink:"/docs/features/techdocs/configuring-ci-cd"}},i={},l=[{value:"Configuring Google GCS Bucket with TechDocs",id:"configuring-google-gcs-bucket-with-techdocs",level:2},{value:"Configuring AWS S3 Bucket with TechDocs",id:"configuring-aws-s3-bucket-with-techdocs",level:2},{value:"Configuring Azure Blob Storage Container with TechDocs",id:"configuring-azure-blob-storage-container-with-techdocs",level:2},{value:"Configuring OpenStack Swift Container with TechDocs",id:"configuring-openstack-swift-container-with-techdocs",level:2},{value:"Bonus: Migration from old OpenStack Swift Configuration",id:"bonus-migration-from-old-openstack-swift-configuration",level:2},{value:"Step 1: Change the credential keys",id:"step-1-change-the-credential-keys",level:5},{value:"Step 2: Remove the unused keys",id:"step-2-remove-the-unused-keys",level:5},{value:"Step 3: Add Swift URL",id:"step-3-add-swift-url",level:5},{value:"That&#39;s it!",id:"thats-it",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/architecture",children:"TechDocs architecture"}),' you have the option to choose\nwhere you want to store the Generated static files which TechDocs uses to render\ndocumentation. In both the "Basic" and "Recommended" setup, you can add cloud\nstorage providers like Google GCS, Amazon AWS S3, etc. By default, TechDocs uses\nthe local filesystem of the ',(0,o.jsx)(n.code,{children:"techdocs-backend"}),' plugin in the "Basic" setup. And\nin the recommended setup, having one of the cloud storage is a prerequisite.\nRead more on the TechDocs Architecture documentation page.']}),"\n",(0,o.jsx)(n.p,{children:"On this page you can read how to enable them."}),"\n",(0,o.jsx)(n.h2,{id:"configuring-google-gcs-bucket-with-techdocs",children:"Configuring Google GCS Bucket with TechDocs"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the\n",(0,o.jsx)(n.a,{href:"https://googleapis.dev/nodejs/storage/latest/index.html#quickstart",children:"official Google Cloud documentation"}),"\nfor the latest instructions on the following steps involving GCP."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["1. Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," config in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," to ",(0,o.jsx)(n.code,{children:"'googleGcs'"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'googleGcs'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Create a GCS Bucket"})}),"\n",(0,o.jsx)(n.p,{children:"Create a dedicated Google Cloud Storage bucket for TechDocs sites.\ntechdocs-backend will publish documentation to this bucket. TechDocs will fetch\nfiles from here to serve documentation in Backstage. Note that the bucket names\nare globally unique."}),"\n",(0,o.jsxs)(n.p,{children:["Set the config ",(0,o.jsx)(n.code,{children:"techdocs.publisher.googleGcs.bucketName"})," in your\n",(0,o.jsx)(n.code,{children:"app-config.yaml"})," to the name of the bucket you just created. Set\n",(0,o.jsx)(n.code,{children:"techdocs.publisher.googleGcs.projectId"})," to the ID of the Google Cloud project\nthat contains your bucket."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'googleGcs'\n    googleGcs:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      projectId: 'name-of-project'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3a. (Recommended) Authentication using environment variable"})}),"\n",(0,o.jsxs)(n.p,{children:["The GCS Node.js client will automatically use the environment variable\n",(0,o.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," to authenticate with Google Cloud. It might\nalready be set in Compute Engine, Google Kubernetes Engine, etc. Read\n",(0,o.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/production",children:"https://cloud.google.com/docs/authentication/production"})," for more details."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3b. Authentication using app-config.yaml"})}),"\n",(0,o.jsx)(n.p,{children:"If you do not prefer (3a) and optionally like to use a service account, you can\nfollow these steps."}),"\n",(0,o.jsx)(n.p,{children:'Create a new Service Account and a key associated with it. In roles of the\nservice account, use "Storage Object Admin".'}),"\n",(0,o.jsxs)(n.p,{children:["If you want to create a custom role, make sure to include both ",(0,o.jsx)(n.code,{children:"get"})," and\n",(0,o.jsx)(n.code,{children:"create"}),' permissions for both "Objects" and "Buckets". See\n',(0,o.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/access-control/iam-permissions",children:"https://cloud.google.com/storage/docs/access-control/iam-permissions"})]}),"\n",(0,o.jsx)(n.p,{children:"A service account can have many keys. Open your newly created account's page (in\nIAM & Admin console), and create a new key. Use JSON format for the key."}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"<GCP-PROJECT-ID-random-uid>.json"})," file will be downloaded. This is the secret\nkey TechDocs will use to make API calls. Make it available in your Backstage\nserver and/or your local development server and set it in the app config\n",(0,o.jsx)(n.code,{children:"techdocs.publisher.googleGcs.credentials"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'googleGcs'\n    googleGcs:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        $file: '/path/to/google_application_credentials.json'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: If you are finding it difficult to make the file\n",(0,o.jsx)(n.code,{children:"google_application_credentials.json"})," available on a server, you could use the\nfile's content and set as an environment variable. And then use"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'googleGcs'\n    googleGcs:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      credentials: ${GOOGLE_APPLICATION_CREDENTIALS}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Assuming the service account you are using was created in the same project as\nthe bucket, you do not need to set the ",(0,o.jsx)(n.code,{children:"projectId"})," field. If not, you will\nhave to override it as with default credentials:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'googleGcs'\n    googleGcs:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      credentials: ${GOOGLE_APPLICATION_CREDENTIALS}\n      projectId: 'name-of-project'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. That's it!"})}),"\n",(0,o.jsx)(n.p,{children:"Your Backstage app is now ready to use Google Cloud Storage for TechDocs, to\nstore and read the static generated documentation files."}),"\n",(0,o.jsx)(n.h2,{id:"configuring-aws-s3-bucket-with-techdocs",children:"Configuring AWS S3 Bucket with TechDocs"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["1. Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," config in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," to ",(0,o.jsx)(n.code,{children:"'awsS3'"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'awsS3'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Create an S3 Bucket"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a dedicated AWS S3 bucket for the storage of TechDocs sites.\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html",children:"Refer to the official documentation"}),".\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/terraform/techdocs-s3-storage/terraform.tf",children:"Terraform example"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"TechDocs will publish documentation to this bucket and will fetch files from\nhere to serve documentation in Backstage. Note that the bucket names are\nglobally unique."}),"\n",(0,o.jsxs)(n.p,{children:["Set the config ",(0,o.jsx)(n.code,{children:"techdocs.publisher.awsS3.bucketName"})," in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"}),"\nto the name of the bucket you just created."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'awsS3'\n    awsS3:\n      bucketName: 'name-of-techdocs-storage-bucket'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. Create minimal AWS IAM policies to manage TechDocs"})}),"\n",(0,o.jsxs)(n.p,{children:["To ",(0,o.jsx)(n.em,{children:"write"})," TechDocs into the S3 bucket the IAM policy needs to have at a minimum\npermissions to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:ListBucket"})," to retrieve bucket metadata"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:PutObject"})," to upload files to the bucket"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:DeleteObject"})," and ",(0,o.jsx)(n.code,{children:"s3:DeleteObjectVersion"})," to delete stale content during\nre-publishing"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To ",(0,o.jsx)(n.em,{children:"read"})," TechDocs from the S3 bucket the IAM policy needs to have at a minimum\npermissions to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:ListBucket"})," - To retrieve bucket metadata"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:GetObject"})," - To retrieve files from the bucket"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Note",type:"note",children:[(0,o.jsx)(n.p,{children:"If you need to migrate documentation objects from an older-style path\nformat including case-sensitive entity metadata, you will need to add some\nadditional permissions to be able to perform the migration, including:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:PutBucketAcl"})," (for copying files,\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html",children:"more info here"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3:DeleteObject"})," and ",(0,o.jsx)(n.code,{children:"s3:DeleteObjectVersion"})," (for deleting migrated files,\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html",children:"more info here"}),")"]}),"\n"]}),(0,o.jsx)(n.p,{children:"...And you will need to ensure the permissions apply to the bucket itself, as\nwell as all resources under the bucket. See the example policy below."})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "TechDocsWithMigration",\n      "Effect": "Allow",\n      "Action": [\n        "s3:PutObject",\n        "s3:GetObject",\n        "s3:DeleteObjectVersion",\n        "s3:ListBucket",\n        "s3:DeleteObject",\n        "s3:PutObjectAcl"\n      ],\n      "Resource": ["arn:aws:s3:::your-bucket", "arn:aws:s3:::your-bucket/*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4a. (Recommended) Setup authentication the AWS way, using environment\nvariables"})}),"\n",(0,o.jsxs)(n.p,{children:["You should follow the\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html",children:"AWS security best practices guide for authentication"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"TechDocs needs access to read files and metadata of the S3 bucket. So if you are\ncreating a policy for a user you want to make sure it is granted access to\nListBucket, GetObject and PutObject."}),"\n",(0,o.jsx)(n.p,{children:"If the environment variables"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"AWS_REGION"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["are set and can be used to access the bucket you created in step 2, they will be\nused by the AWS SDK V3 Node.js client for authentication.\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html",children:"Refer to the official documentation for loading credentials in Node.js from environment variables"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If the environment variables are missing, the AWS SDK tries to read the\n",(0,o.jsx)(n.code,{children:"~/.aws/credentials"})," file for credentials.\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html",children:"Refer to the official documentation."})]}),"\n",(0,o.jsxs)(n.p,{children:["If you are deploying Backstage to Amazon EC2, Amazon ECS, or Amazon EKS, you do\nnot need to obtain the access keys separately. They can be made available in the\nenvironment automatically by defining appropriate IAM role with access to the\nbucket. Read more in the\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html#use-roles",children:"official AWS documentation for using IAM roles"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4b. Authentication using app-config.yaml"})}),"\n",(0,o.jsxs)(n.p,{children:["AWS credentials and region can be provided to the AWS SDK via ",(0,o.jsx)(n.code,{children:"app-config.yaml"}),".\nIf the configs below are present, they will be used over existing ",(0,o.jsx)(n.code,{children:"AWS_*"}),"\nenvironment variables and the ",(0,o.jsx)(n.code,{children:"~/.aws/credentials"})," config file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'awsS3'\n    awsS3:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      accountId: '123456789012'\n      region: ${AWS_REGION}\naws:\n  accounts:\n    - accountId: '123456789012'\n      accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html",children:"official AWS documentation for obtaining the credentials"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4c. Authentication using an assumed role"})," Users with multiple AWS accounts\nmay want to use a role for S3 storage that is in a different AWS account. Using\nthe ",(0,o.jsx)(n.code,{children:"roleArn"})," parameter as seen below, you can instruct the TechDocs publisher\nto assume a role before accessing S3."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'awsS3'\n    awsS3:\n      bucketName: 'name-of-techdocs-storage-bucket'\n      region: ${AWS_REGION}\n      credentials:\n        roleArn: arn:aws:iam::123456789012:role/my-backstage-role\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: Assuming a role requires that primary credentials are already configured\nat ",(0,o.jsx)(n.code,{children:"AWS.config.credentials"}),". Read more about\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html",children:"assuming roles in AWS"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"5. That's it!"})}),"\n",(0,o.jsxs)(n.p,{children:["Your Backstage app is now ready to use AWS S3 for TechDocs, to store and read\nthe static generated documentation files. When you start the backend of the app,\nyou should be able to see\n",(0,o.jsx)(n.code,{children:"techdocs info Successfully connected to the AWS S3 bucket"})," in the logs."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-azure-blob-storage-container-with-techdocs",children:"Configuring Azure Blob Storage Container with TechDocs"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the\n",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-auth?toc=/azure/storage/blobs/toc.json",children:"official Azure Blob Storage documentation"}),"\nfor the latest instructions on the following steps involving Azure Blob Storage."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["1. Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," config in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," to ",(0,o.jsx)(n.code,{children:"'azureBlobStorage'"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'azureBlobStorage'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Create an Azure Blob Storage Container"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a dedicated container for TechDocs sites.\n",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",children:"Refer to the official documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"TechDocs will publish documentation to this container and will fetch files from\nhere to serve documentation in Backstage. Note that the container names are\nglobally unique."}),"\n",(0,o.jsxs)(n.p,{children:["Set the config ",(0,o.jsx)(n.code,{children:"techdocs.publisher.azureBlobStorage.containerName"})," in your\n",(0,o.jsx)(n.code,{children:"app-config.yaml"})," to the name of the container you just created."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'azureBlobStorage'\n    azureBlobStorage:\n      containerName: 'name-of-techdocs-storage-container'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3a. (Recommended) Authentication using environment variable"})}),"\n",(0,o.jsxs)(n.p,{children:["If you do not prefer (3a) and optionally like to use a service account, you can\nset the config ",(0,o.jsx)(n.code,{children:"techdocs.publisher.azureBlobStorage.credentials.accountName"})," in\nyour ",(0,o.jsx)(n.code,{children:"app-config.yaml"})," to the your account name."]}),"\n",(0,o.jsxs)(n.p,{children:["The storage blob client will automatically use the environment variable\n",(0,o.jsx)(n.code,{children:"AZURE_TENANT_ID"}),", ",(0,o.jsx)(n.code,{children:"AZURE_CLIENT_ID"}),", ",(0,o.jsx)(n.code,{children:"AZURE_CLIENT_SECRET"})," to authenticate with\nAzure Blob Storage.\n",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal",children:"Steps to create the service where the variables can be retrieved from"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad",children:"https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad"})," for more\ndetails."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'azureBlobStorage'\n    azureBlobStorage:\n      containerName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        accountName: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_NAME}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3b. Authentication using app-config.yaml"})}),"\n",(0,o.jsx)(n.p,{children:"If you do not prefer (3a) and optionally like to use a service account, you can\nfollow these steps."}),"\n",(0,o.jsxs)(n.p,{children:['To get credentials, access the Azure Portal and go to "Settings > Access Keys",\nand get your Storage account name and Primary Key.\n',(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key",children:"https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key"}),"\nfor more details."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'azureBlobStorage'\n    azureBlobStorage:\n      containerName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        accountName: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_NAME}\n        accountKey: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_KEY}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In either case, the account or credentials used to access your container and all\nTechDocs objects underneath it should have the ",(0,o.jsx)(n.code,{children:"Storage Blog Data Owner"})," role\napplied, in order to read, write, and delete objects as needed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. That's it!"})}),"\n",(0,o.jsxs)(n.p,{children:["Your Backstage app is now ready to use Azure Blob Storage for TechDocs, to store\nand read the static generated documentation files. When you start the backend of\nthe app, you should be able to see\n",(0,o.jsx)(n.code,{children:"techdocs info Successfully connected to the Azure Blob Storage container"})," in\nthe logs."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-openstack-swift-container-with-techdocs",children:"Configuring OpenStack Swift Container with TechDocs"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the\n",(0,o.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/identity/v3/",children:"official OpenStack Api documentation"}),"\nfor the latest instructions on the following steps involving OpenStack Storage."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["1. Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," config in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"techdocs.publisher.type"})," to ",(0,o.jsx)(n.code,{children:"'openStackSwift'"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'openStackSwift'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Create an OpenStack Swift Storage Container"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a dedicated container for TechDocs sites.\n",(0,o.jsx)(n.a,{href:"https://docs.openstack.org/mitaka/user-guide/dashboard_manage_containers.html",children:"Refer to the official documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"TechDocs will publish documentation to this container and will fetch files from\nhere to serve documentation in Backstage. Note that the container names are\nglobally unique."}),"\n",(0,o.jsxs)(n.p,{children:["Set the config ",(0,o.jsx)(n.code,{children:"techdocs.publisher.openStackSwift.containerName"})," in your\n",(0,o.jsx)(n.code,{children:"app-config.yaml"})," to the name of the container you just created."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'openStackSwift'\n    openStackSwift:\n      containerName: 'name-of-techdocs-storage-container'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. Authentication using app-config.yaml"})}),"\n",(0,o.jsxs)(n.p,{children:["Set the configs in your ",(0,o.jsx)(n.code,{children:"app-config.yaml"})," to point to your container name."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/identity/v3/?expanded=password-authentication-with-unscoped-authorization-detail,authenticating-with-an-application-credential-detail#authenticating-with-an-application-credential",children:"https://docs.openstack.org/api-ref/identity/v3/?expanded=password-authentication-with-unscoped-authorization-detail,authenticating-with-an-application-credential-detail#authenticating-with-an-application-credential"}),"\nfor more details."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'openStackSwift'\n    openStackSwift:\n      containerName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        id: ${OPENSTACK_SWIFT_STORAGE_APPLICATION_CREDENTIALS_ID}\n        secret: ${OPENSTACK_SWIFT_STORAGE_APPLICATION_CREDENTIALS_SECRET}\n      authUrl: ${OPENSTACK_SWIFT_STORAGE_AUTH_URL}\n      swiftUrl: ${OPENSTACK_SWIFT_STORAGE_SWIFT_URL}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. That's it!"})}),"\n",(0,o.jsxs)(n.p,{children:["Your Backstage app is now ready to use OpenStack Swift Storage for TechDocs, to\nstore and read the static generated documentation files. When you start the\nbackend of the app, you should be able to see\n",(0,o.jsx)(n.code,{children:"techdocs info Successfully connected to the OpenStack Swift Storage container"}),"\nin the logs."]}),"\n",(0,o.jsx)(n.h2,{id:"bonus-migration-from-old-openstack-swift-configuration",children:"Bonus: Migration from old OpenStack Swift Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Let's assume we have the old OpenStack Swift configuration here."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'openStackSwift'\n    openStackSwift:\n      containerName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        username: ${OPENSTACK_SWIFT_STORAGE_USERNAME}\n        password: ${OPENSTACK_SWIFT_STORAGE_PASSWORD}\n      authUrl: ${OPENSTACK_SWIFT_STORAGE_AUTH_URL}\n      keystoneAuthVersion: ${OPENSTACK_SWIFT_STORAGE_AUTH_VERSION}\n      domainId: ${OPENSTACK_SWIFT_STORAGE_DOMAIN_ID}\n      domainName: ${OPENSTACK_SWIFT_STORAGE_DOMAIN_NAME}\n      region: ${OPENSTACK_SWIFT_STORAGE_REGION}\n"})}),"\n",(0,o.jsx)(n.h5,{id:"step-1-change-the-credential-keys",children:"Step 1: Change the credential keys"}),"\n",(0,o.jsxs)(n.p,{children:["Since the new SDK uses ",(0,o.jsx)(n.em,{children:"Application Credentials"})," to authenticate OpenStack, we\nneed to change the keys ",(0,o.jsx)(n.code,{children:"credentials.username"})," to ",(0,o.jsx)(n.code,{children:"credentials.id"}),",\n",(0,o.jsx)(n.code,{children:"credentials.password"})," to ",(0,o.jsx)(n.code,{children:"credentials.secret"})," and use Application Credential ID\nand secret here. For more detail about credentials look\n",(0,o.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/identity/v3/?expanded=password-authentication-with-unscoped-authorization-detail,authenticating-with-an-application-credential-detail#authenticating-with-an-application-credential",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"step-2-remove-the-unused-keys",children:"Step 2: Remove the unused keys"}),"\n",(0,o.jsxs)(n.p,{children:["Since the new SDK doesn't use the old way authentication, we don't need the keys\n",(0,o.jsx)(n.code,{children:"openStackSwift.keystoneAuthVersion"}),", ",(0,o.jsx)(n.code,{children:"openStackSwift.domainId"}),",\n",(0,o.jsx)(n.code,{children:"openStackSwift.domainName"})," and ",(0,o.jsx)(n.code,{children:"openStackSwift.region"}),". So you can remove them."]}),"\n",(0,o.jsx)(n.h5,{id:"step-3-add-swift-url",children:"Step 3: Add Swift URL"}),"\n",(0,o.jsxs)(n.p,{children:["The new SDK needs the OpenStack Swift connection URL for connecting the Swift.\nSo you need to add a new key called ",(0,o.jsx)(n.code,{children:"openStackSwift.swiftUrl"})," and give the\nOpenStack Swift URL here. Example URL should look like that:\n",(0,o.jsx)(n.code,{children:"https://example.com:6780/swift/v1"})]}),"\n",(0,o.jsx)(n.h5,{id:"thats-it",children:"That's it!"}),"\n",(0,o.jsx)(n.p,{children:"Your new configuration should look like that!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"techdocs:\n  publisher:\n    type: 'openStackSwift'\n    openStackSwift:\n      containerName: 'name-of-techdocs-storage-bucket'\n      credentials:\n        id: ${OPENSTACK_SWIFT_STORAGE_APPLICATION_CREDENTIALS_ID}\n        secret: ${OPENSTACK_SWIFT_STORAGE_APPLICATION_CREDENTIALS_SECRET}\n      authUrl: ${OPENSTACK_SWIFT_STORAGE_AUTH_URL}\n      swiftUrl: ${OPENSTACK_SWIFT_STORAGE_SWIFT_URL}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var o=t(827378),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,r={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:c,type:e,key:l,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function j(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function S(){}function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var x=y.prototype=new S;x.constructor=y,g(x,j.prototype),x.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function A(e,n,o){var c,r={},s=null,a=null;if(null!=n)for(c in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)k.call(n,c)&&!_.hasOwnProperty(c)&&(r[c]=n[c]);var i=arguments.length-2;if(1===i)r.children=o;else if(1<i){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+2];r.children=l}if(e&&e.defaultProps)for(c in i=e.defaultProps)void 0===r[c]&&(r[c]=i[c]);return{$$typeof:t,type:e,key:s,ref:a,props:r,_owner:w.current}}function v(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var T=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,c,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case o:i=!0}}if(i)return s=s(i=e),e=""===r?"."+C(i,0):r,b(s)?(c="",null!=e&&(c=e.replace(T,"$&/")+"/"),E(s,n,c,"",(function(e){return e}))):null!=s&&(v(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,c+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+e)),n.push(s)),1;if(i=0,r=""===r?".":r+":",b(e))for(var l=0;l<e.length;l++){var d=r+C(a=e[l],l);i+=E(a,n,c,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)i+=E(a=a.value,n,c,d=r+C(a,l++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,n,t){if(null==e)return e;var o=[],c=0;return E(e,o,"","",(function(e){return n.call(t,e,c++)})),o}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:w};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!v(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=c,n.Profiler=s,n.PureComponent=y,n.StrictMode=r,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=g({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=w.current),void 0!==n.key&&(r=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)k.call(n,l)&&!_.hasOwnProperty(l)&&(c[l]=void 0===n[l]&&void 0!==i?i[l]:n[l])}var l=arguments.length-2;if(1===l)c.children=o;else if(1<l){i=Array(l);for(var d=0;d<l;d++)i[d]=arguments[d+2];c.children=i}return{$$typeof:t,type:e.type,key:r,ref:s,props:c,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=A,n.createFactory=function(e){var n=A.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=v,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=R.transition;R.transition={};try{e()}finally{R.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(667294);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);