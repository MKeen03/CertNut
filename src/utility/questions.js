const ami = "ami";
const true_false = "true_false";
const multiple_choice = "multiple_choice";
const easy = "easy";
const medium = "medium";
// const hard = "hard";
const solutions_architect_associate = "solutions_architect_associate";
const multiple_selection = "multiple_selection";
const api_gateway = "api_gateway";
const auto_scaling_group = "auto_scaling_group";
const aurora = "aurora";
const cli = "cli";
const sdk = "sdk";
const cloudFormation = "cloudFormation";
const cloudfront = "cloudfront";
const cloudtrail = "cloudtrail";

const questions = [
  // AMIs
  {
    question: "What is the purpose of an AMI?",
    flashcard: "What is the purpose of an AMI?",
    tags: [multiple_choice, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer:
          "To provide an amazon supported machine image for a new EC2 instance.",
        correct: true,
      },
      {
        answer: "To have an easy way to attach storage to an EC2 instance.",
        correct: false,
      },
      {
        answer: "To provide a free way to shop for new EC2 instances.",
        correct: false,
      },
      {
        answer:
          "A template for automating architecture, configuration, and code.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "An AMI is specific to:",
    flashcard: "An AMI is specific to:",
    tags: [multiple_choice, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer: "a Region.",
        correct: true,
      },
      {
        answer: "an Availability Zone.",
        correct: false,
      },
      {
        answer: "an Account.",
        correct: false,
      },
      {
        answer: "an Organization.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "You can create an AMI from an EC2 instance that is currently running or stopped.",
    flashcard:
      "True or False: You can create an AMI from an EC2 instance that is currently running or stopped.",
    tags: [true_false, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Which of the below statements is true of AMIs?",
    flashcard: "What are communitry AMIs?",
    tags: [multiple_choice, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer:
          "AWS will regularly pause your EC2 instances to create AMIs for you.",
        correct: false,
      },
      {
        answer:
          "Community AMIs are free AMIs that are maintained by the AWS user community.",
        correct: true,
      },
      {
        answer: "Creating an AMI is the recommended way to back up data.",
        correct: false,
      },
      {
        answer: "AWS charges you per AMI snapshot that you create.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "The AWS Martketplace hosts free and paid AMIs that are supported by venders.",
    flashcard:
      "True or False: The AWS Marketplace hosts free and paid AMIs that are supported by vendors.",
    tags: [true_false, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Select all that are true from the following:",
    flashcard: null,
    tags: [medium, solutions_architect_associate, multiple_selection, ami],
    answers: [
      {
        answer:
          "An AMI contains a template for the root volume of an instance. This can be an EBS Snapshot or an Instance Store Template.",
        correct: true,
      },
      {
        answer:
          "Each AMI will have a unique ID. This ID will vary even if copied to another region.",
        correct: true,
      },
      {
        answer:
          "AMIs can only be created from previously terminated instances.",
        correct: false,
      },
      {
        answer: "AMIs can be copied to other regions.",
        correct: true,
      },
      {
        answer: "AWS charges you per AMI snapshot that you create.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "AMIs all have access to the same hardware in each region.",
    flashcard:
      "True or False: AMIs all have access to the same hardware in each region.",
    tags: [true_false, easy, solutions_architect_associate, ami],
    answers: [
      {
        answer: "True",
        correct: false,
      },
      {
        answer: "False",
        correct: true,
      },
    ],
    selection: {},
  },

  // API GATEWAY
  {
    question: "What is the default rate limit for Amazon's API Gateway?",
    flashcard: "What is the default rate limit for Amazon's API Gateway?",
    tags: [multiple_choice, easy, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "100 per second.",
        correct: false,
      },
      {
        answer: "100,000 per minute.",
        correct: false,
      },
      {
        answer: "1,000,000 per day",
        correct: false,
      },
      {
        answer: "10,000 per second.",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "What is true of CORS in relation to AWS's API Gateway? (Select all that apply)",
    flashcard: null,
    tags: [
      multiple_selection,
      easy,
      solutions_architect_associate,
      api_gateway,
    ],
    answers: [
      {
        answer: "CORS is not supported by AWS's API Gateway.",
        correct: false,
      },
      {
        answer: "CORS is enabled by default.",
        correct: false,
      },
      {
        answer: "CORS can be enabled on all or individual endpoints.",
        correct: true,
      },
      {
        answer: "CORS helps to prevent XSS attacks from occuring.",
        correct: true,
      },
      {
        answer: "CORS is always enforced by the client.",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "You can utilize AWS Cognito or create a custom Lambda function to require authentication to your API.",
    flashcard:
      "True or False: You can utilize AWS Cognito or create a custom Lambda function to require authentication to your API.",
    tags: [true_false, easy, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Stages allow you to have multiple versions of your API.",
    flashcard:
      "True or False: Stages allow you to have multiple versions of your API.",
    tags: [true_false, easy, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What are the sub paths referred to as in an API Gateway?",
    flashcard: "What are the sub paths referred to as in an API Gateway?",
    tags: [multiple_choice, medium, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "Policies",
        correct: false,
      },
      {
        answer: "Endpoints",
        correct: false,
      },
      {
        answer: "Resources",
        correct: true,
      },
      {
        answer: "Trackers",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What is an Invoke URL in relation to an API Gateway?",
    flashcard: "What is an Invoke URL in relation to an API Gateway?",
    tags: [multiple_choice, easy, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "A URL that can be used to invoke a Lambda function.",
        correct: false,
      },
      {
        answer: "A base endpoint that you can use to interact with your API.",
        correct: false,
      },
      {
        answer: "A URL that can be used to create child endpoints.",
        correct: true,
      },
      {
        answer: "There is no such thing as an Invoke URL.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "Select the HTTP methods supported by API Gateway. (Select all that apply)",
    flashcard: null,
    tags: [
      multiple_selection,
      easy,
      solutions_architect_associate,
      api_gateway,
    ],
    answers: [
      {
        answer: "GET",
        correct: true,
      },
      {
        answer: "CORS",
        correct: false,
      },
      {
        answer: "PUT",
        correct: true,
      },
      {
        answer: "DELETE",
        correct: true,
      },
      {
        answer: "POST",
        correct: true,
      },
    ],
    selection: {},
  },

  // AUTOSCALING GROUPS
  {
    question: "An autoscaling group is a collection of:",
    flashcard: "An autoscaling group is a collection of:",
    tags: [multiple_choice, easy, solutions_architect_associate, api_gateway],
    answers: [
      {
        answer: "EC2 Instances",
        correct: true,
      },
      {
        answer: "Lamda Functions",
        correct: false,
      },
      {
        answer: "Permissions attached to an IAM role",
        correct: false,
      },
      {
        answer: "Caching layers",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Scaling out is when:",
    flashcard: "Scaling out is when:",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer: "EC2 Instances are added by the autoscaling group.",
        correct: true,
      },
      {
        answer: "EC2 Instances are removed by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 Instances are increased in size by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 instances are decreased in size by the autoscaling group.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Scaling up is when:",
    flashcard: "Scaling up is when:",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer: "EC2 Instances are added by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 Instances are removed by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 Instances are increased in size by the autoscaling group.",
        correct: true,
      },
      {
        answer: "EC2 instances are decreased in size by the autoscaling group.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Scaling in is when:",
    flashcard: "Scaling in is when:",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer: "EC2 Instances are added by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 Instances are removed by the autoscaling group.",
        correct: true,
      },
      {
        answer: "EC2 Instances are increased in size by the autoscaling group.",
        correct: false,
      },
      {
        answer: "EC2 instances are decreased in size by the autoscaling group.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "Launch configurations cannot be manually edited and must be cloned or a new one created.",
    flashcard:
      "Launch configurations cannot be manually edited and must be cloned or a new one created.",
    tags: [true_false, easy, solutions_architect_associate, auto_scaling_group],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What does an autoscaling group use to launch EC2 instances?",
    flashcard: "What does an autoscaling group use to launch EC2 instances?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer: "An IAM role",
        correct: false,
      },
      {
        answer: "An Amazon ECS cluster",
        correct: false,
      },
      {
        answer: "An Amazon EFS file system",
        correct: false,
      },
      {
        answer: "A Launch Configuration",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "A Target Scaling Policy scales based on when a target value for a given metric is reached.",
    flashcard:
      "A Target Scaling Policy scales based on when a target value for a given metric is reached.",
    tags: [true_false, easy, solutions_architect_associate, auto_scaling_group],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "A Launch Configuration is a collection of settings that are used to launch EC2 instances.",
    flashcard:
      "A Launch Configuration is a collection of settings that are used to launch EC2 instances.",
    tags: [true_false, easy, solutions_architect_associate, auto_scaling_group],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "In relation to Auto Scaling Groups, Health Checks determine the current state of:",
    flashcard:
      "In relation to Auto Scaling Groups, Health Checks determine the current state of:",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer: "An Autoscaling Group",
        correct: false,
      },
      {
        answer: "Lambda Functions pointed at an Autoscaling Group",
        correct: false,
      },
      {
        answer: "ELBs AND EC2 Instances",
        correct: true,
      },
      {
        answer: "RDS Instances attached to an Autoscaling Group",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What is the main difference between Simple Scaling Policy and Scaling Policy with Steps?",
    flashcard:
      "What is the main difference between Simple Scaling Policy and Scaling Policy with Steps?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      auto_scaling_group,
    ],
    answers: [
      {
        answer:
          "A Simple Scaling Policy scales when an alarm is triggered. A Scaling Policy with Steps scales when a different service stops responding.",
        correct: false,
      },
      {
        answer:
          "A Simple Scaling Policy will only scale to the desired number of instances. A Scaling Policy with Steps will use information from multiple services to decide when to scale.",
        correct: false,
      },
      {
        answer: "There is no such thing as a Scaling Policy with Steps.",
        correct: false,
      },
      {
        answer:
          "A Simple Scaling Policy scales when an alarm is triggered. A Scaling Policy with Steps is the replacement of a Simple Scaling Policy and allows you to create steps based on escalating alarm values.",
        correct: true,
      },
    ],
    selection: {},
  },

  // AURORA
  {
    question:
      "Which of the following are true of Amazon Aurora? (Select all that apply)",
    flashcard: null,
    tags: [multiple_selection, easy, solutions_architect_associate, aurora],
    answers: [
      {
        answer: "Fully Managed",
        correct: true,
      },
      {
        answer: "Non-Relational",
        correct: false,
      },
      {
        answer: "Automatic Backups",
        correct: true,
      },
      {
        answer: "Highly Fault Tolerant",
        correct: true,
      },
      {
        answer: "Automatic Scaling",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "What two database engines are available to run in Amazon Aurora?",
    flashcard:
      "What two database engines are available to run in Amazon Aurora?",
    tags: [multiple_choice, easy, solutions_architect_associate, aurora],
    answers: [
      {
        answer: "MariaDB and PostgreSQL",
        correct: false,
      },
      {
        answer: "MySQL and PostgreSQL",
        correct: true,
      },
      {
        answer: "MSSQL and PostgreSQL",
        correct: false,
      },
      {
        answer: "Oracle and MySQL",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What is the maximum number of Read Replicas that can be created for an Amazon Aurora DB cluster?",
    flashcard:
      "What is the maximum number of Read Replicas that can be created for an Amazon Aurora DB cluster?",
    tags: [multiple_choice, easy, solutions_architect_associate, aurora],
    answers: [
      {
        answer: "15",
        correct: true,
      },
      {
        answer: "10",
        correct: false,
      },
      {
        answer: "5",
        correct: false,
      },
      {
        answer: "20",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What is the benefit to Aurora Serverless?",
    flashcard: "What is the benefit to Aurora Serverless?",
    tags: [multiple_choice, easy, solutions_architect_associate, aurora],
    answers: [
      {
        answer: "There is no such thing as Aurora Serverless.",
        correct: false,
      },
      {
        answer:
          "Aurora Serverless allows you to use a non-relational database like MongoDB or Redis.",
        correct: false,
      },
      {
        answer:
          "Aurora Serverless only stores data the comes directly from Lambda Functions, and interfaces directly with DynamoDB.",
        correct: false,
      },
      {
        answer:
          "Aurora Serverless allows you to stop, start, and scale automatically while keeping costs low. Additionally, it is ideal for projects with infrequent database useage.",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "Which of the following are true of Amazon Aurora? (Select all that apply)",
    flashcard: null,
    tags: [multiple_selection, easy, solutions_architect_associate, aurora],
    answers: [
      {
        answer: "3x faster than PostgreSQL",
        correct: true,
      },
      {
        answer: "5x faster than MySQL",
        correct: true,
      },
      {
        answer:
          "Aurora creates 6 copies of your database across 3 availability zones",
        correct: true,
      },
      {
        answer:
          "Aurora is 1/10th the cost of its major competitors with the same performance and availability",
        correct: true,
      },
      {
        answer:
          "An Aurora database can span multiple regions via Aurora Global Database",
        correct: true,
      },
    ],
    selection: {},
  },

  // AWS CLI AND SDK
  {
    question: "What does CLI stand for?",
    flashcard: "What does CLI stand for?",
    tags: [multiple_choice, easy, solutions_architect_associate, cli],
    answers: [
      {
        answer: "Common Library Implementation",
        correct: false,
      },
      {
        answer: "Cost Limited Interface",
        correct: false,
      },
      {
        answer: "Command Line Interface",
        correct: true,
      },
      {
        answer: "Centralized Logging Interface",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What command would you run to set up AWS credentials for the CLI?",
    flashcard:
      "What command would you run to set up AWS credentials for the CLI?",
    tags: [multiple_choice, easy, solutions_architect_associate, cli],
    answers: [
      {
        answer: "aws configure",
        correct: true,
      },
      {
        answer: "aws credentials",
        correct: false,
      },
      {
        answer: "aws login",
        correct: false,
      },
      {
        answer: "aws create-new-user",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What must be enabled for a user's account in order for them to use the CLI or SDK?",
    flashcard:
      "What must be enabled for a user's account in order for them to use the CLI or SDK?",
    tags: [multiple_choice, easy, solutions_architect_associate, cli],
    answers: [
      {
        answer: "Allow SDK/CLI = true",
        correct: false,
      },
      {
        answer: "Developer Tools",
        correct: false,
      },
      {
        answer: "Programmatic Access",
        correct: true,
      },
      {
        answer:
          "Nothing, as long as you have a valid AWS account you have access",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What language is used to install the CLI?",
    flashcard: "What language is used to install the CLI?",
    tags: [multiple_choice, easy, solutions_architect_associate, cli],
    answers: [
      {
        answer: "Python",
        correct: true,
      },
      {
        answer: "Java",
        correct: false,
      },
      {
        answer: "PHP",
        correct: false,
      },
      {
        answer: "C++",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What does SDK stand for?",
    flashcard: "What does SDK stand for?",
    tags: [multiple_choice, easy, solutions_architect_associate, sdk],
    answers: [
      {
        answer: "Shared Development Kit",
        correct: false,
      },
      {
        answer: "Software Development Kit",
        correct: true,
      },
      {
        answer: "Simple DevOps Kit",
        correct: false,
      },
      {
        answer: "None of the above",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "The AWS SDK is a set of API Libraries that allow you to interact with AWS services from your application code.",
    flashcard:
      "The AWS SDK is a set of API Libraries that allow you to interact with AWS services from your application code.",
    tags: [true_false, easy, solutions_architect_associate, cli],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "Which of the following programming languages have access to the AWS SDK?",
    flashcard: null,
    tags: [multiple_selection, medium, solutions_architect_associate, sdk],
    answers: [
      {
        answer: "SQL",
        correct: false,
      },
      {
        answer: "PHP",
        correct: true,
      },
      {
        answer: "COBOL",
        correct: false,
      },
      {
        answer: "Python",
        correct: true,
      },
      {
        answer: "Java",
        correct: true,
      },
    ],
    selection: {},
  },

  // CLOUDFORMATION
  {
    question: "What are the two primary concerns of CloudFormation?",
    flashcard: "What are the two primary concerns of CloudFormation?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      cloudFormation,
    ],
    answers: [
      {
        answer: "Automation and Infratstructure as Code (IAC)",
        correct: true,
      },
      {
        answer: "Infratstructure as Code (IAC) and Serverless Architectures",
        correct: false,
      },
      {
        answer: "Automation and Cloud Deployments",
        correct: false,
      },
      {
        answer: "None of the above",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What are the two formats that CloudFormation supports?",
    flashcard: "What are the two formats that CloudFormation supports?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      cloudFormation,
    ],
    answers: [
      {
        answer: "Python and Libraries",
        correct: false,
      },
      {
        answer: "Java and JavaScript",
        correct: false,
      },
      {
        answer: "Protobuff and OpenData Format",
        correct: false,
      },
      {
        answer: "JSON and YAML",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question:
      "What is the message displayed when CloudFormation encounters an error while deploying a script?",
    flashcard:
      "What is the message displayed when CloudFormation encounters an error while deploying a script?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      cloudFormation,
    ],
    answers: [
      {
        answer: "ROLLBACK_IN_PROGRESS",
        correct: true,
      },
      {
        answer: "ERROR_IN_NESTED_STACK",
        correct: false,
      },
      {
        answer: "FAILURE_TO_DEPLOY",
        correct: false,
      },
      {
        answer: "None of the above",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What is the maximum size of a CloudFormation Template?",
    flashcard: "What is the maximum size of a CloudFormation Template?",
    tags: [
      multiple_choice,
      easy,
      solutions_architect_associate,
      cloudFormation,
    ],
    answers: [
      {
        answer: "1 GB",
        correct: true,
      },
      {
        answer: "5 MB",
        correct: false,
      },
      {
        answer: "51,200 bytes",
        correct: false,
      },
      {
        answer: "There is no maximum size",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Which of the following are true of CloudFormation templates?",
    flashcard: null,
    tags: [
      multiple_selection,
      medium,
      solutions_architect_associate,
      cloudFormation,
    ],
    answers: [
      {
        answer:
          "At least one resource must be defined in 'Resources' in order for the template to be valid.",
        correct: true,
      },
      {
        answer: "Outputs are values you can import to other stacks.",
        correct: true,
      },
      {
        answer: "Parameters handle user input into a template.",
        correct: true,
      },
      {
        answer:
          "The description field allows you to describe what the template is intended for.",
        correct: true,
      },
      {
        answer:
          "Nesting templates is not supported and will likely cause errors.",
        correct: false,
      },
    ],
    selection: {},
  },

  // CLOUDFRONT
  {
    question:
      "Cloudfront is a CDN (content distribution network) that is able to deliver speed increases for applications by caching content that is frequently accessed at edge locations.",
    flashcard:
      "Cloudfront is a CDN (content distribution network) that is able to deliver speed increases for applications by caching content that is frequently accessed at edge locations.",
    tags: [true_false, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What does TTL stand for in relation to Cloudfront, and what purpose does it serve?",
    flashcard:
      "What does TTL stand for in relation to Cloudfront, and what purpose does it serve?",
    tags: [multiple_choice, medium, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer:
          "TTL stands for Total Timing Locating and this is how long is takes to get cached content to a user near an edge location.",
        correct: false,
      },
      {
        answer:
          "TTL stands for Total Time Live and refers to EC2 instances, not Cloudfront.",
        correct: false,
      },
      {
        answer:
          "TTL stands for Time to Live and this determines how long content lives at an edge location before it is refreshed.",
        correct: true,
      },
      {
        answer: "TTL does not stand for anything in relation to AWS.",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "Origin is that address where the original copies of your files reside.",
    flashcard:
      "Origin is that address where the original copies of your files reside.",
    tags: [true_false, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "What must you do in order for your cache to refresh immediately?",
    flashcard:
      "What must you do in order for your cache to refresh immediately?",
    tags: [multiple_choice, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer:
          "The cache can only be updated by Cloudfront automatically and happens every 30 seconds.",
        correct: false,
      },
      {
        answer: "Update the origin",
        correct: false,
      },
      {
        answer: "Update the specific edge location's cache",
        correct: false,
      },
      {
        answer: "Invalidate it",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question: "Refreshing the cache has an associated transfer cost.",
    flashcard: "Refreshing the cache has an associated transfer cost.",
    tags: [true_false, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "Access to cached content can by proctected by what?",
    flashcard: null,
    tags: [multiple_selection, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "Signed URLs",
        correct: true,
      },
      {
        answer: "KMS",
        correct: false,
      },
      {
        answer: "Signed Cookies",
        correct: true,
      },
      {
        answer: "Origin Identity Access (OAI)",
        correct: false,
      },
      {
        answer: "Using Lambda Functions",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question:
      "A Distribution defines a collection of Edge Locations and determines cache handling behavior at edge locations.",
    flashcard:
      "A Distribution defines a collection of Edge Locations and determines cache handling behavior at edge locations.",
    tags: [true_false, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "True",
        correct: true,
      },
      {
        answer: "False",
        correct: false,
      },
    ],
    selection: {},
  },

  {
    question: "What are the two types of Distributions?",
    flashcard: "What are the two types of Distributions?",
    tags: [multiple_choice, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "Web Distribution and RTMP",
        correct: false,
      },
      {
        answer: "Lambda Distributions and OAI",
        correct: false,
      },
      {
        answer: "EC2 Instances and Edge Locations",
        correct: false,
      },
      {
        answer: "Web Distribution and RTMP",
        correct: true,
      },
    ],
    selection: {},
  },

  {
    question: "What does Lambda@Edge allow you to do?",
    flashcard: "What does Lambda@Edge allow you to do?",
    tags: [multiple_choice, easy, solutions_architect_associate, cloudfront],
    answers: [
      {
        answer: "Allows you to invalidate your cache so it can be updated.",
        correct: false,
      },
      {
        answer: "Enables the use of RTMP for streaming media.",
        correct: false,
      },
      {
        answer:
          "Change the behaviour of each request or response that pass through the Lambda.",
        correct: true,
      },
      {
        answer: "Allows you to host a serverless Web Page.",
        correct: false,
      },
    ],
    selection: {},
  },

  // CLOUDTRAIL
  {
    question: "What is the primary purpose of AWS Cloudtrail?",
    flashcard: "What is the primary purpose of AWS Cloudtrail?",
    tags: [multiple_choice, easy, solutions_architect_associate, cloudtrail],
    answers: [
      {
        answer: "To to ensure that user's have a place to view their own data.",
        correct: false,
      },
      {
        answer: "Enables the use of RTMP for streaming media.",
        correct: false,
      },
      {
        answer: "To log calls between AWS services.",
        correct: true,
      },
      {
        answer: "Allows you to host a serverless Web Page.",
        correct: false,
      },
    ],
    selection: {},
  },
  // KEEN QUESTIONS HERE
];

export default questions;
