# Assignment 1
Write the CODE9 file to achieve:
    99.4% accuracy
    in 15k parameters
    within 20 Epochs

You are not allowed to use:
    Fully connected layer to convert any 2D channel to 1D channel
    Use biases

Submit your GitHub link with a ReadMe.md file
In the ReadMe file:
    copy and paste your Logs for 20 epochs
    copy and paste the result of your model.evaluate (on test data)
    strategy you have taken to achieve the said results


Notebook url: https://github.com/abhinavm24/EIP/blob/master/week2/assignment2/EIGHTH-assignment.ipynb
Colab url: https://colab.research.google.com/github/abhinavm24/EIP/blob/master/week2/assignment2/EIGHTH-assignment.ipynb


## Architecture
    from keras.layers import Activation
    model = Sequential()

    model.add(Convolution2D(10, 3, 3, activation='relu', input_shape=(28,28,1), use_bias=False)) #26
    model.add(BatchNormalization())
    model.add(Dropout(0.1))

    model.add(Convolution2D(15, 3, 3, activation='relu', use_bias=False)) #24
    model.add(BatchNormalization())
    model.add(Dropout(0.1))

    model.add(Convolution2D(10, 1, 1, activation='relu', use_bias=False)) #22

    model.add(MaxPooling2D(pool_size=(2, 2)))#11

    model.add(Convolution2D(15, 3, 3, activation='relu', use_bias=False))#9
    model.add(BatchNormalization())
    model.add(Dropout(0.1))


    model.add(Convolution2D(15, 3, 3, activation='relu', use_bias=False))#7
    model.add(BatchNormalization())
    model.add(Dropout(0.1))


    model.add(Convolution2D(15, 3, 3, activation='relu', use_bias=False))#5
    model.add(BatchNormalization())
    model.add(Dropout(0.1))


    model.add(Convolution2D(15, 3, 3, activation='relu', use_bias=False))#3
    model.add(BatchNormalization())
    model.add(Dropout(0.1))


    model.add(Convolution2D(10, 4, 4, use_bias=False))
    model.add(BatchNormalization())
    model.add(Dropout(0.1))


    model.add(Flatten())
    model.add(Activation('softmax'))


    model.summary()
    
    _________________________________________________________________
    Layer (type)                 Output Shape              Param #   
    =================================================================
    conv2d_1 (Conv2D)            (None, 26, 26, 10)        90        
    _________________________________________________________________
    batch_normalization_1 (Batch (None, 26, 26, 10)        40        
    _________________________________________________________________
    dropout_1 (Dropout)          (None, 26, 26, 10)        0         
    _________________________________________________________________
    conv2d_2 (Conv2D)            (None, 24, 24, 15)        1350      
    _________________________________________________________________
    batch_normalization_2 (Batch (None, 24, 24, 15)        60        
    _________________________________________________________________
    dropout_2 (Dropout)          (None, 24, 24, 15)        0         
    _________________________________________________________________
    conv2d_3 (Conv2D)            (None, 24, 24, 10)        150       
    _________________________________________________________________
    max_pooling2d_1 (MaxPooling2 (None, 12, 12, 10)        0         
    _________________________________________________________________
    conv2d_4 (Conv2D)            (None, 10, 10, 15)        1350      
    _________________________________________________________________
    batch_normalization_3 (Batch (None, 10, 10, 15)        60        
    _________________________________________________________________
    dropout_3 (Dropout)          (None, 10, 10, 15)        0         
    _________________________________________________________________
    conv2d_5 (Conv2D)            (None, 8, 8, 15)          2025      
    _________________________________________________________________
    batch_normalization_4 (Batch (None, 8, 8, 15)          60        
    _________________________________________________________________
    dropout_4 (Dropout)          (None, 8, 8, 15)          0         
    _________________________________________________________________
    conv2d_6 (Conv2D)            (None, 6, 6, 15)          2025      
    _________________________________________________________________
    batch_normalization_5 (Batch (None, 6, 6, 15)          60        
    _________________________________________________________________
    dropout_5 (Dropout)          (None, 6, 6, 15)          0         
    _________________________________________________________________
    conv2d_7 (Conv2D)            (None, 4, 4, 15)          2025      
    _________________________________________________________________
    batch_normalization_6 (Batch (None, 4, 4, 15)          60        
    _________________________________________________________________
    dropout_6 (Dropout)          (None, 4, 4, 15)          0         
    _________________________________________________________________
    conv2d_8 (Conv2D)            (None, 1, 1, 10)          2400      
    _________________________________________________________________
    batch_normalization_7 (Batch (None, 1, 1, 10)          40        
    _________________________________________________________________
    dropout_7 (Dropout)          (None, 1, 1, 10)          0         
    _________________________________________________________________
    flatten_1 (Flatten)          (None, 10)                0         
    _________________________________________________________________
    activation_1 (Activation)    (None, 10)                0         
    =================================================================
    Total params: 11,795
    Trainable params: 11,605
    Non-trainable params: 190

## Training

    from keras.optimizers import Adam
    from keras.callbacks import LearningRateScheduler
    def scheduler(epoch, lr):
      return round(0.003 * 1/(1 + 0.319 * epoch), 10)

    model.compile(loss='categorical_crossentropy', optimizer=Adam(lr=0.003), metrics=['accuracy'])

    model.fit(X_train, Y_train, batch_size=128, epochs=20, verbose=1, validation_data=(X_test, Y_test), callbacks=[LearningRateScheduler(scheduler, verbose=1)])
    
    Train on 60000 samples, validate on 10000 samples
    Epoch 1/20

    Epoch 00001: LearningRateScheduler setting learning rate to 0.003.
    60000/60000 [==============================] - 15s 253us/step - loss: 0.5527 - acc: 0.8432 - val_loss: 0.1038 - val_acc: 0.9769
    Epoch 2/20

    Epoch 00002: LearningRateScheduler setting learning rate to 0.0022744503.
    60000/60000 [==============================] - 9s 157us/step - loss: 0.2603 - acc: 0.9218 - val_loss: 0.0573 - val_acc: 0.9882
    Epoch 3/20

    Epoch 00003: LearningRateScheduler setting learning rate to 0.0018315018.
    60000/60000 [==============================] - 10s 160us/step - loss: 0.2056 - acc: 0.9383 - val_loss: 0.0498 - val_acc: 0.9892
    Epoch 4/20

    Epoch 00004: LearningRateScheduler setting learning rate to 0.0015329586.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.1753 - acc: 0.9451 - val_loss: 0.0396 - val_acc: 0.9900
    Epoch 5/20

    Epoch 00005: LearningRateScheduler setting learning rate to 0.0013181019.
    60000/60000 [==============================] - 10s 160us/step - loss: 0.1537 - acc: 0.9502 - val_loss: 0.0332 - val_acc: 0.9920
    Epoch 6/20

    Epoch 00006: LearningRateScheduler setting learning rate to 0.0011560694.
    60000/60000 [==============================] - 10s 160us/step - loss: 0.1486 - acc: 0.9496 - val_loss: 0.0301 - val_acc: 0.9924
    Epoch 7/20

    Epoch 00007: LearningRateScheduler setting learning rate to 0.0010295127.
    60000/60000 [==============================] - 9s 158us/step - loss: 0.1361 - acc: 0.9509 - val_loss: 0.0272 - val_acc: 0.9923
    Epoch 8/20

    Epoch 00008: LearningRateScheduler setting learning rate to 0.0009279307.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.1301 - acc: 0.9517 - val_loss: 0.0265 - val_acc: 0.9926
    Epoch 9/20

    Epoch 00009: LearningRateScheduler setting learning rate to 0.0008445946.
    60000/60000 [==============================] - 10s 160us/step - loss: 0.1188 - acc: 0.9549 - val_loss: 0.0230 - val_acc: 0.9931
    Epoch 10/20

    Epoch 00010: LearningRateScheduler setting learning rate to 0.0007749935.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.1156 - acc: 0.9550 - val_loss: 0.0263 - val_acc: 0.9925
    Epoch 11/20

    Epoch 00011: LearningRateScheduler setting learning rate to 0.0007159905.
    60000/60000 [==============================] - 10s 164us/step - loss: 0.1139 - acc: 0.9529 - val_loss: 0.0217 - val_acc: 0.9941
    Epoch 12/20

    Epoch 00012: LearningRateScheduler setting learning rate to 0.000665336.
    60000/60000 [==============================] - 10s 160us/step - loss: 0.1094 - acc: 0.9551 - val_loss: 0.0227 - val_acc: 0.9936
    Epoch 13/20

    Epoch 00013: LearningRateScheduler setting learning rate to 0.0006213753.
    60000/60000 [==============================] - 9s 158us/step - loss: 0.1044 - acc: 0.9563 - val_loss: 0.0223 - val_acc: 0.9938
    Epoch 14/20

    Epoch 00014: LearningRateScheduler setting learning rate to 0.0005828638.
    60000/60000 [==============================] - 9s 157us/step - loss: 0.1050 - acc: 0.9553 - val_loss: 0.0191 - val_acc: 0.9947
    Epoch 15/20

    Epoch 00015: LearningRateScheduler setting learning rate to 0.0005488474.
    60000/60000 [==============================] - 9s 157us/step - loss: 0.1038 - acc: 0.9564 - val_loss: 0.0218 - val_acc: 0.9933
    Epoch 16/20

    Epoch 00016: LearningRateScheduler setting learning rate to 0.0005185825.
    60000/60000 [==============================] - 10s 158us/step - loss: 0.1014 - acc: 0.9561 - val_loss: 0.0205 - val_acc: 0.9943
    Epoch 17/20

    Epoch 00017: LearningRateScheduler setting learning rate to 0.000491481.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.0993 - acc: 0.9569 - val_loss: 0.0180 - val_acc: 0.9947
    Epoch 18/20

    Epoch 00018: LearningRateScheduler setting learning rate to 0.0004670715.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.0966 - acc: 0.9574 - val_loss: 0.0197 - val_acc: 0.9941
    Epoch 19/20

    Epoch 00019: LearningRateScheduler setting learning rate to 0.0004449718.
    60000/60000 [==============================] - 10s 159us/step - loss: 0.0975 - acc: 0.9562 - val_loss: 0.0179 - val_acc: 0.9951
    Epoch 20/20

    Epoch 00020: LearningRateScheduler setting learning rate to 0.000424869.
    60000/60000 [==============================] - 9s 156us/step - loss: 0.0961 - acc: 0.9580 - val_loss: 0.0181 - val_acc: 0.9951

    <keras.callbacks.History at 0x7fea70e1cdd8>
    
    score = model.evaluate(X_test, Y_test, verbose=0)
    print(score)
    [0.018119229308026844, 0.9951]
    


## Strategy
As the code evolved through 8 iterations, I could learn the importance of max-pooling, dropout etc.

After removing bias from all layers, I could easily go beyond 99.4 mark with little more than 16k params. So, I made a choice to reduce the no. of output channels of the convolution blocks, since MNIST is a easy dataset, probably we don't need so many channel after each layer. With little less than 12k params, I could still reach 99.4 in 20 epochs.


[code 1](https://tinyurl.com/yyhddxw5) - basic cnn based model for mnist. 
[code 2](https://tinyurl.com/y248vr36) - max pooling after 3 convolution layers 
[code 3](https://tinyurl.com/yyv4md9y) - param reduction by reducing number of filters   
[code 4](https://tinyurl.com/y65qk93c) - Batch normalization standaradizes the inputs, more cnn blocks  
[code 5](https://tinyurl.com/y2qacq7u) - increase no. of output channels for convolutions  
[code 6](https://tinyurl.com/yyfxyozm) - regularization using dropout  
[code 7](https://tinyurl.com/y2omp9s3) - learning rate scheduler  
[code 8](https://tinyurl.com/y494cv85) - dropout after every convolution layer  
