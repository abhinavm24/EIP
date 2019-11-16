# Assignment

## Convolution
    It is element-wise matrix multiplication and summation of image and the kernel. DNN based vision application use kernels as feature detectors. It can be summarized as correlation between the kernel and the image.
    
## Filters/Kernels
    Kernel is a matrix of real numbers. When a kernel is convolved over an image it acts like feature detector by boosting certain features while removing the others.
    
## Epochs
    Epoch is a single pass of the entire dataset through the network. Epochs is the number of times the dataset is passed through the network.
    
## 1x1 Convolution
    It is an matrix of size 1X1. It is used to reduce the dimensionality(in dimension of channel) produced by the repetitive application of multiple kernels on the image.
    
## 3x3 Convolution
    Is is a matrix of size 3X3. It convolves 9 pixel values into one while boosting the relevant feature. It is one of the most used kernel size due to it being computationally efficient(due to low no of params and optimisation done for this size in GPU architecture).
    
## Feature Maps
    The output of convolution of the kernel on image is a feature map. 
    
## Activation Function
    It is the function we introduce on top of the sum of products calculation. It is to introduce non-linearity to the equation and thus help create the mapping to almost any random function.
    
## Receptive Field
    It is the part of the image that the CNN layer has access to/sees. Global receptive field is define wrt. to the original image while local receptive field is wrt to the immediately preceding layer.
    
