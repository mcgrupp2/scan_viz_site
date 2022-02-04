import pandas as pd
import altair as alt
import random

def call_data(number):
  return [random.randrange(0,100) for x in range(number)]


def chart_me():
  source = pd.DataFrame({
      'a': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      'b': call_data(9)
  })
  
  chart=alt.Chart(source).mark_bar().encode(
      x='a',
      y='b'
  )
  chart_js=chart.to_json()
  return chart_js
