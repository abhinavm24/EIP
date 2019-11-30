# Assignment 3
Run this (Links to an external site.) network (base network) for 50 epochs, report Validation Accuracy after 50 epochs.  
Add new cells at the bottom of the code, and write your own network such that:  
    it uses depthwise separable convolution ONLY (no Conv2D)  
    it uses BatchNormalization  
    has less than 100,000 parameters  
    it uses proper dropout values  
    you've mentioned the output size for each layer  
    you've mentioned the receptive field for each layer  
    runs for 50 epochs  
    beats the validation score within 50 epochs (at any epoch run, doesn't need to be final one)  
    Submit the github link  
Your github links must have:  
    Assignment 3.ipynb file with your code as well as logs for both the models  
    ReadMe.md which should have:  
    Final Validation accuracy for Base Network  
    Your model definition (model.add... ) with output channel size and receptive field  
    Your 50 epoch log  


Notebook url: https://github.com/abhinavm24/EIP/blob/master/week3/assignment/Assignment_6-solution.ipynb
Colab url: https://colab.research.google.com/github/abhinavm24/EIP/blob/master/week3/assignment/Assignment_6-solution.ipynb 

## Baseline
Accuracy on test data is: 82.68


## Architecture
	model = Sequential()
	model.add(SeparableConv2D(32, (3, 3), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False, input_shape=(32,32,3))) #30, 3
	model.add(Activation('relu'))
	model.add(BatchNormalization())
	model.add(Dropout(0.1))

	model.add(SeparableConv2D(64, (3, 3), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #28, 5
	model.add(Activation('relu'))
	model.add(BatchNormalization())
	model.add(Dropout(0.1))

	model.add(SeparableConv2D(128, (3, 3), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #26, 7
	model.add(Activation('relu'))
	model.add(BatchNormalization())

	model.add(MaxPooling2D(pool_size=(2, 2))) #13, 8
	model.add(Dropout(0.1))
	 
	model.add(SeparableConv2D(32, (1, 1), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #13, 8
	model.add(Activation('relu'))
	model.add(BatchNormalization())
	model.add(Dropout(0.1))

	model.add(SeparableConv2D(128, (3, 3), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #11, 12
	model.add(Activation('relu'))
	model.add(BatchNormalization())
	model.add(Dropout(0.1))

	model.add(SeparableConv2D(256, (3, 3),kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #9, 16
	model.add(Activation('relu'))
	model.add(BatchNormalization())
	model.add(Dropout(0.1))

	model.add(MaxPooling2D(pool_size=(2, 2))) #4, 18
	model.add(Dropout(0.1))
	 
	model.add(SeparableConv2D(64, (1, 1), kernel_regularizer=regularizers.l2(weight_decay), padding='valid', use_bias=False)) #4, 18
	model.add(Activation('relu'))

	model.add(SeparableConv2D(10, (1, 1))) #4, 18
	model.add(BatchNormalization())
	model.add(SeparableConv2D(10, (4, 4))) #1, 18
	model.add(GlobalAveragePooling2D())
	model.add(Activation('softmax'))


## Training
	from keras.preprocessing.image import ImageDataGenerator

	datagen = ImageDataGenerator(zoom_range=0.0,
	                             width_shift_range=0.1,
	                             height_shift_range=0.1, 
	                             horizontal_flip=True)


	# train the model
	start = time.time()
	# Train the model
	model_info = model.fit_generator(datagen.flow(train_features, train_labels, batch_size = 128),
	                                 samples_per_epoch = train_features.shape[0], nb_epoch = 50, 
	                                 validation_data = (test_features, test_labels), verbose=1)
	end = time.time()
	print ("Model took %0.2f seconds to train"%(end - start))
	# plot model history
	plot_model_history(model_info)
	# compute test accuracy
	print ("Accuracy on test data is: %0.2f"%accuracy(test_features, test_labels, model))

	Epoch 1/50
	390/390 [==============================] - 30s 76ms/step - loss: 1.6834 - acc: 0.3731 - val_loss: 1.4593 - val_acc: 0.4960
	Epoch 2/50
	390/390 [==============================] - 26s 67ms/step - loss: 1.2809 - acc: 0.5413 - val_loss: 1.1782 - val_acc: 0.5730
	Epoch 3/50
	390/390 [==============================] - 26s 67ms/step - loss: 1.1509 - acc: 0.5901 - val_loss: 1.0394 - val_acc: 0.6258
	Epoch 4/50
	390/390 [==============================] - 27s 68ms/step - loss: 1.0663 - acc: 0.6205 - val_loss: 0.9857 - val_acc: 0.6585
	Epoch 5/50
	390/390 [==============================] - 27s 68ms/step - loss: 1.0067 - acc: 0.6462 - val_loss: 0.9396 - val_acc: 0.6684
	Epoch 6/50
	390/390 [==============================] - 27s 69ms/step - loss: 0.9582 - acc: 0.6604 - val_loss: 0.8686 - val_acc: 0.6900
	Epoch 7/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.9175 - acc: 0.6751 - val_loss: 0.8725 - val_acc: 0.6963
	Epoch 8/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.8856 - acc: 0.6891 - val_loss: 0.8370 - val_acc: 0.7057
	Epoch 9/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.8497 - acc: 0.7007 - val_loss: 0.7881 - val_acc: 0.7263
	Epoch 10/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.8220 - acc: 0.7106 - val_loss: 0.7472 - val_acc: 0.7407
	Epoch 11/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.8070 - acc: 0.7171 - val_loss: 0.7914 - val_acc: 0.7254
	Epoch 12/50
	390/390 [==============================] - 26s 66ms/step - loss: 0.7910 - acc: 0.7219 - val_loss: 0.7334 - val_acc: 0.7444
	Epoch 13/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.7702 - acc: 0.7299 - val_loss: 0.7770 - val_acc: 0.7348
	Epoch 14/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.7534 - acc: 0.7348 - val_loss: 0.7049 - val_acc: 0.7543
	Epoch 15/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.7445 - acc: 0.7399 - val_loss: 0.7747 - val_acc: 0.7366
	Epoch 16/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.7288 - acc: 0.7459 - val_loss: 0.6592 - val_acc: 0.7701
	Epoch 17/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.7155 - acc: 0.7490 - val_loss: 0.8564 - val_acc: 0.7113
	Epoch 18/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.7067 - acc: 0.7535 - val_loss: 0.6976 - val_acc: 0.7628
	Epoch 19/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.6930 - acc: 0.7596 - val_loss: 0.7755 - val_acc: 0.7303
	Epoch 20/50
	390/390 [==============================] - 27s 68ms/step - loss: 0.6921 - acc: 0.7584 - val_loss: 0.7185 - val_acc: 0.7549
	Epoch 21/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6718 - acc: 0.7658 - val_loss: 0.6645 - val_acc: 0.7704
	Epoch 22/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6734 - acc: 0.7641 - val_loss: 0.6737 - val_acc: 0.7705
	Epoch 23/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6631 - acc: 0.7728 - val_loss: 0.6513 - val_acc: 0.7748
	Epoch 24/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6608 - acc: 0.7694 - val_loss: 0.6100 - val_acc: 0.7899
	Epoch 25/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6521 - acc: 0.7715 - val_loss: 0.6482 - val_acc: 0.7804
	Epoch 26/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6476 - acc: 0.7750 - val_loss: 0.6303 - val_acc: 0.7850
	Epoch 27/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.6383 - acc: 0.7783 - val_loss: 0.5925 - val_acc: 0.7982
	Epoch 28/50
	390/390 [==============================] - 27s 68ms/step - loss: 0.6329 - acc: 0.7791 - val_loss: 0.7417 - val_acc: 0.7559
	Epoch 29/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6271 - acc: 0.7802 - val_loss: 0.6114 - val_acc: 0.7940
	Epoch 30/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6223 - acc: 0.7826 - val_loss: 0.6147 - val_acc: 0.7898
	Epoch 31/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6115 - acc: 0.7855 - val_loss: 0.6036 - val_acc: 0.7932
	Epoch 32/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6164 - acc: 0.7847 - val_loss: 0.6074 - val_acc: 0.7947
	Epoch 33/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.6037 - acc: 0.7907 - val_loss: 0.6876 - val_acc: 0.7692
	Epoch 34/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5949 - acc: 0.7923 - val_loss: 0.6651 - val_acc: 0.7750
	Epoch 35/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5977 - acc: 0.7923 - val_loss: 0.6097 - val_acc: 0.7924
	Epoch 36/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5931 - acc: 0.7928 - val_loss: 0.6276 - val_acc: 0.7899
	Epoch 37/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5913 - acc: 0.7942 - val_loss: 0.6542 - val_acc: 0.7838
	Epoch 38/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5911 - acc: 0.7936 - val_loss: 0.6260 - val_acc: 0.7934
	Epoch 39/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5837 - acc: 0.7974 - val_loss: 0.5944 - val_acc: 0.7993
	Epoch 40/50
	390/390 [==============================] - 27s 68ms/step - loss: 0.5825 - acc: 0.7961 - val_loss: 0.6117 - val_acc: 0.7950
	Epoch 41/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5761 - acc: 0.8004 - val_loss: 0.5971 - val_acc: 0.7994
	Epoch 42/50
	390/390 [==============================] - 27s 68ms/step - loss: 0.5720 - acc: 0.8008 - val_loss: 0.5862 - val_acc: 0.7994
	Epoch 43/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5697 - acc: 0.8031 - val_loss: 0.5898 - val_acc: 0.8016
	Epoch 44/50
	390/390 [==============================] - 26s 67ms/step - loss: 0.5703 - acc: 0.8010 - val_loss: 0.5347 - val_acc: 0.8161
	Epoch 45/50
	390/390 [==============================] - 27s 68ms/step - loss: 0.5678 - acc: 0.8039 - val_loss: 0.5882 - val_acc: 0.7985
	Epoch 46/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5613 - acc: 0.8028 - val_loss: 0.5844 - val_acc: 0.8020
	Epoch 47/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5574 - acc: 0.8055 - val_loss: 0.5535 - val_acc: 0.8136
	Epoch 48/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5568 - acc: 0.8075 - val_loss: 0.5826 - val_acc: 0.7979
	Epoch 49/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5573 - acc: 0.8044 - val_loss: 0.5472 - val_acc: 0.8160
	Epoch 50/50
	390/390 [==============================] - 26s 68ms/step - loss: 0.5503 - acc: 0.8109 - val_loss: 0.5533 - val_acc: 0.8134
	Model took 1319.72 seconds to train
	Accuracy on test data is: 81.34

## Best accuracy=0.816, epoch=49


