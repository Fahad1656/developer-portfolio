import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "Leveraging Sequential Deep Learning Models for Detecting Multitude of Human Action Categories ",
    description:
      "Human Action Recognition (HAR) is critical for smart decision-making and public safety. Our study focuses on recognizing actions using a dataset of 1,275 videos featuring 20 actions, including violent and non-violent behaviors. A pipeline combining YOLO-v8 for background extraction and deep learning models (Conv-LSTM and LRCN) was developed. The LRCN model achieved 62% accuracy and 60% F1 score for 20 classes, 63% accuracy and 66% F1 score for 17 classes, and 88% accuracy with 87% F1 score for binary classification. This highlights HAR's potential for enhancing real-time safety systems.",
      
    tools: [
      "Python",
      "Tensorflow",
      "Torch",
      "YOLO v8",
      "CNN",
      "OpenCV",
      "LSTM",
      "CONV-LSTM",
      "LRCN",
    ],
    role: "Image processing, Model training, Result analysis",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Cattle-Biometric Identification System",
    description:
      "This is the biometric identification system of a cow, where you can register muzzle images of cow and verify through the muzzle image , is it registered or not. If the muzzle is already registered then it will show the muzzle is matched or else not matched.",
    tools: [
      "Python",
      "OpenCV",
      "HogDescriptor",
      "Tensorflow",
      "Torch",
      "Numpy",
      "MySQL",
      "FastAPI",
    ],
    role: "Model training and integrating the model in the api for muzzle identification",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Cattle-Weight Prediction System",
    description:
      "This system uses side and rear images of a cow to predict its weight. It segments the images, detects key points, and calculates the cow's length and girth. A regression model then predicts the weight based on these measurements. Multiple models are used for segmentation, keypoint detection, and regression, with MMLab as a key tool for implementation.",

    tools: [
      "Python",
      "MMCV",
      "Joblib",
      "Matplotlib",
      "Keras",
      "Torch",
      "Tensorflow",
      "Pillow",
      "PyYAML",
      "Scikit-learn",
      "Seaborn",
      "SQLAlchemy",
      "Torchvision",
      "vine",
      "xtcocotools",
      "MySQL",
      "FastAPI",
    ],
    code: "",
    role: "Image Processing, model training and integrating the models in the restful APIS for cow weight prediction",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Cattle-disease detection",
    description:
      "This is the disease detection system of cattle where you have to input cow’s mouth , feet and skin images . After reading the images it will detect the cow have any diseases on mouth or feet or skin if any disease detected it will return the cow is not healthy or else it will return the cow is healthy ",

    tools: [
      "Python",
      "Mobilnetv2",
      "OpenCV",
      "Torch",
      "Tensorflow",
      "MySQL",
      "FastAPI",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Image Processing, model training and integrating the models in the restful APIS for cow disease detection",
  },
  {
    id: 5,
    name: "Advanced Leaf Counting for Agricultural Applications Using Deep Learning",

    description:
      "This project focuses on counting rosette leaves in RGB images for plant phenotyping using adaptable data-driven methods. A deconvolutional neural network (De-CNN) handles segmentation, while a CNN counts the leaves. Despite limited training data from the CVPPP-2017 dataset, we achieve strong results with data augmentation, achieving an average mean absolute count difference of 1.62 and a standard deviation of 2.30, outperforming previous methods.",

    tools: ["python", "torch", "CNN", "DE-CNN", "Torch", "Tensorflow"],
    role: "Model training",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 6,
    name: "User and Admin Management Service",

    description:
      "This project delivers a seamless platform for users and administrators. Users can register, log in, access real-time chat via WebSocket, and enjoy live streaming with Agora. Administrators manage the system with tools for job allocation, salary settings, and user account management. Built with Vite and NestJS, it ensures a fast, scalable, and efficient experience",
    tools: [
      "NestJS",
      "ReactJS",
      "Redis",
      "Prisma",
      "Javascript",
      "Typescript",
      "AGORA",
    ],
    role: " Full-stack development",
    code: "",
    demo: "",
    image: crefin,
  },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
