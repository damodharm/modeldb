const mockExperimentRuns = [
    {
       "name":"expr-run-1",
       "metrics":[
          {
             "key":"val_acc",
             "value":0.8145
          }
       ],
       "hyperparameters": [
          {
             "key":"C",
             "value":0.0001
          },
          {
             "key":"solver",
             "value":"lbfgs"
          },
          {
             "key":"max_iter",
             "value":28
          }
       ],
    },
    {
       "name":"expr-run-2",
       "metrics":[
          {
             "key":"val_acc",
             "value":0.7852
          }
       ],
       "hyperparameters":[
          {
             "key":"C",
             "value":0.000001
          },
          {
             "key":"solver",
             "value":"lbfgs"
          },
          {
             "key":"max_iter",
             "value":15
          }
       ]
    },
    {
       "name":"expr-run-3",
       "metrics":[
          {
             "key":"val_acc",
             "value":0.7879
          }
       ],
       "hyperparameters":[
          {
             "key":"C",
             "value":0.0001
          },
          {
             "key":"solver",
             "value":"lbfgs"
          },
          {
             "key":"max_iter",
             "value":28
          }
       ]
    },
    {
       "name":"expr-run-4",
       "metrics":[
          {
             "key":"val_acc",
             "value":0.8539
          }
       ],
       "hyperparameters":[
          {
             "key":"C",
             "value":0.000001
          },
          {
             "key":"solver",
             "value":"lbfgs"
          },
          {
             "key":"max_iter",
             "value":15
          }
       ]
    }
 ];

 module.exports = {
    mockExperimentRuns
 };