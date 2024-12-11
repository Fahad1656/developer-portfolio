import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "Leveraging Sequential Deep Learning Models for Detecting Multitude of Human Action Categories ",
    description:
      "In today’s world, where science and technology are constantly evolving day by day, people are drawn to tangible experiences and visual representations. There’s a growing effort to teach machines about human movements and postures to enable smart decision-making. This has led to increased interest in the field of human action recognition (HAR) among researchers globally. Our research focuses on implementing advanced technologies to address criminal activities, specifically emphasizing Human Activity Recognition (HAR). Moreover, our dataset includes 1275 videos, covering 20 different actions involving both violent and non-violent behaviors. In addition, we have developed a pipeline that utilizes YOLO-v8 to extract background, followed by models for accurate video classification. two models,conv-lstm and lrcn, were incorporated into our deep learning pipeline. Through our observations, we found that the LRCN model outperformed the other model, achieving an accuracy of 62% and an F1 score of 60% for the 20 classes, for 17 classes an accuracy of 63% and an F1 score of 66%. for binary classification LRCN got accuracy of 88% and an F1 score of 87%Our research focusses the potential of advanced technologies to significantly improve Human Activity Recognition (HAR) in addressing various aspects of criminal activities in real-time scenario. This marks a substantial step forward in intelligent decision-making and public safety.",

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
      "This is the system where it requires two images of cow, one is side and other one is rear image. By reading the side and rear images, it will first segment the side and rear image of the cow and then it will detect the necessary key points of the cow and based on keypoints , the length and grith can be found. Morever, from the length and grith a regression model will be applied for predicting cow weight. In addition, severel models have been used such as- one model is to segment the cow, other model is to detect the keypoints of cow and other regression model has been used to predict the weight of the cow. Also a key tool has been used which is MMLab and it helped to perform the action.",
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
    role: "Image Processing, model training and integrating the models in the restful APIS for cow weight prediction",
  },
  {
    id: 5,
    name: "Advanced Leaf Counting for Agricultural Applications Using Deep Learning",

    description:
      "In this project, we address the task of quantifying the number of rosette leaves in RGB images, a critical aspect of plant phenotyping. Our approach is based on data-driven methodologies that are adaptable to various plant species and imaging configurations. To tackle this challenge, we utilize cutting-edge deep learning models, employing a deconvolutional neural network (De-CNN) for initial segmentation and a convolutional neural network (CNN) for leaf counting. We evaluate our method using the CVPPP-2017 dataset, which provides a relatively small number of training examples compared to standard deep learning image datasets. Despite this limitation, we achieve commendable results in both leaf segmentation and leaf counting by applying straightforward data augmentation techniques. Furthermore, we conduct a comparative analysis against methods previously evaluated on competition datasets. Our approach demonstrates an average mean absolute count difference of 1.62 and a standard deviation (SD) of 2.30 across all five test datasets.",

    tools: ["python", "torch", "CNN", "DE-CNN", "Torch", "Tensorflow"],
    role: "Model training",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 6,
    name: "User and Admin Management Service",
    
  description: "This project offers a seamless experience for users and administrators with a range of powerful features. Users can register, log in, and access real-time chat via WebSocket technology. Registered users also enjoy exclusive access to live streaming sessions powered by Agora Streaming Service. For administrators, the platform provides tools to manage the system effectively. Admins can register, log in, allocate jobs to other admins with salary settings, delete user accounts, and update user details as needed. Built with a modern tech stack, the platform uses Vite for a fast frontend and NestJS for a scalable backend, ensuring a reliable and efficient user experience."
  ,

    tools: ["NestJS","ReactJS","Redis","Prisma","Javascript","Typescript","AGORA"],
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