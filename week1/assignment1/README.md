# Assignment 1
Change the model in such a way that after executing the code below, your accuracy print out is more than 99.0

Notebook url : https://github.com/abhinavm24/EIP/blob/master/week1/assignment1/1st_DNN.ipynb <BR />
Colab url : https://colab.research.google.com/github/abhinavm24/EIP/blob/master/week1/assignment1/1st_DNN.ipynb
    
    model.fit(X_train, Y_train, validation_data=(X_test, Y_test), batch_size=64, nb_epoch=10, verbose=1)

    Train on 60000 samples, validate on 10000 samples
    Epoch 1/10
    60000/60000 [==============================] - 7s 122us/step - loss: 0.2594 - acc: 0.9240 - val_loss: 0.0831 - val_acc: 0.9743
    Epoch 2/10
    60000/60000 [==============================] - 5s 82us/step - loss: 0.0774 - acc: 0.9766 - val_loss: 0.0533 - val_acc: 0.9820
    Epoch 3/10
    60000/60000 [==============================] - 5s 79us/step - loss: 0.0581 - acc: 0.9821 - val_loss: 0.0559 - val_acc: 0.9821
    Epoch 4/10
    60000/60000 [==============================] - 5s 81us/step - loss: 0.0481 - acc: 0.9849 - val_loss: 0.0385 - val_acc: 0.9873
    Epoch 5/10
    60000/60000 [==============================] - 5s 81us/step - loss: 0.0399 - acc: 0.9877 - val_loss: 0.0365 - val_acc: 0.9888
    Epoch 6/10
    60000/60000 [==============================] - 5s 81us/step - loss: 0.0353 - acc: 0.9890 - val_loss: 0.0322 - val_acc: 0.9902
    Epoch 7/10
    60000/60000 [==============================] - 5s 82us/step - loss: 0.0310 - acc: 0.9905 - val_loss: 0.0324 - val_acc: 0.9900
    Epoch 8/10
    60000/60000 [==============================] - 5s 80us/step - loss: 0.0267 - acc: 0.9914 - val_loss: 0.0364 - val_acc: 0.9892
    Epoch 9/10
    60000/60000 [==============================] - 5s 81us/step - loss: 0.0235 - acc: 0.9927 - val_loss: 0.0414 - val_acc: 0.9869
    Epoch 10/10
    60000/60000 [==============================] - 5s 82us/step - loss: 0.0215 - acc: 0.9930 - val_loss: 0.0317 - val_acc: 0.9907

    score = model.evaluate(X_test, Y_test, verbose=0)
    print(score)
    [0.031676357892761006, 0.9907]



# Assignment 2 - Definitions

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
    
