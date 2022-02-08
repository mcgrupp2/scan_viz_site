# Model Result Visualizations

The below visualizations depict the predictions from several tuned and trained models. The models were trained with roughly 18,000 samples with various data including symptoms, demographics, geographic location and more. The results showing are predictions made on ~4,000 hold out samples used as a test set.

There are three sets of visualizations which can be controlled with the buttons on the left of the screen.
The "High Threshold" slider will adjust the top line of the middle visualization and the single line of the bottom visualization.
The "Low Threshold" slider will adjust the bottom line in the middle visualization and the single line of the top visualization.
The different model predictions can be cycled by changing the classifier via the "Choose Model" dropdown menu.   

The main figures (dot-plots) in each row show the predictions for the chosen model. The y-axis represents the predicted probability for the test sample and the x-axis is the order in which the prediction was made.

There are three bar charts in each row that will adjust when the threshold or classifier is changed. The first two bar charts in all of the rows are the same, but the third bar chart differs between the first row and the other two rows. The first bar chart in each row represents the percentage of the total test population (~4000) that would fall in the given range. The second bar chart in each row represents the total percentage of positives that fall in the given range. The differences of the third bar charts will be called out in section explanations below.


### Model Diagnosed

The thresholds the top visualizations can be controlled with the "Low Threshold" slider. The samples in this range would have a low probability of being infected or another interpretation would be that these are highly probable to have a negative result.

The gray dots in the probability plots are meant to represent the population that would be diagnosed with the model alone. Each person that falls in this range would be considered negative, with no further testing required. 

There is no way to discern between positive and negative visually in the plots, as these samples would be considered negative and a true result would not be found via biochemical testing. There is a tooltip that will show the true result for the sample, and the predicted output for the sample.

The first bar chart in this row represents the percentage of the total test population (~4000) that would fall in this range, and the second bar represents the total percentage of positive samples that are in this range. 

The third bar chart represents <a href="https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values"> negative predictive value </a> of the model given this test population. This value represents the efficacy of the prediction, or the percentage of samples that have been predicted as negative are true negative samples.

To maximize the potential of this system the first and third bars should be **maximized** and the middle bar chart should be _minimizied_ . The idea is to serve as much of the population as possible with the model prediction, as not further resources will be required.

### Higher Performance Tests

The thresholds the middle visualizations can be controlled with the "High Threshold" and "Low Threshold" slider. The samples in this range would have a middle predicted probability of being infected. These samples would receive the higher performance tests with regard to sensitivity and specificity, such as a qPCR respiratory pathogen panel, a point-of-care SARs-CoV-2 NAAT test, or instrument-read SARs-CoV-2 rapid diagnostic test.

The first bar chart in this row represents the percentage of the total test population (~4000) that would fall in this range, and the second bar represents the total percentage of positive samples that are in this range. 

The third bar chart in this row depicts the percentage of samples in the selected range that are positive samples. A large value indicates more efficient usage of testing resources. Tests that fall in the higher performance testing bracket will often require some type of specialized equipment or training, so maximizing the discovery rate will indicate efficient usage of these testing resources.

In general, minimizing the first bar indicates a lower cost associated with regard to the higher performance tests as having the least amount of samples in this bucket will be a lower cost.

### Rapid Diagnostic Tests

The threshold in this last visualization can be controlled with the "High Threshold" slider. These samples would have a high probability of being infected with SARs-CoV-2. These samples would receive lower cost rapid diagnostic test, such as a lateral flow antigen test. 

The first bar chart in this row represents the percentage of the total test population (~4000) that would fall in this range, and the second bar represents the total percentage of positive samples that are in this range. 

The third bar chart in this row depicts the percentage of samples in the selected range that are positive samples. A large value indicates more efficient usage of testing resources. Tests that fall in the higher performance testing bracket will often require some type of specialized equipment or training, so maximizing the discovery rate will indicate efficient usage of these testing resources.

In general, having the first bar chart in the third row less than the first bar in first row and greater than the first bar in the second row could be associated with a lower cost. 






