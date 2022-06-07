import pandas as pd
import json
import sys, json

df = pd.read_csv('OnlineRetail.csv', encoding = 'unicode_escape')
df_baskets = df[['InvoiceNo', 'StockCode', 'Description', 'Quantity']]

df.groupby('Description').agg(
    orders=('InvoiceNo', 'nunique'),
    quantity=('Quantity', 'sum')
).sort_values(by='orders', ascending=False).head(10)

df_items = df_baskets.pivot_table(index='InvoiceNo', columns=['Description'], values='Quantity').fillna(0)

def get_recommendations(df, item):
    recommendations = df.corrwith(df[item])
    recommendations.dropna(inplace=True)
    recommendations = pd.DataFrame(recommendations, columns=['correlation']).reset_index()
    recommendations = recommendations.sort_values(by='correlation', ascending=False)
    
    return recommendations

if __name__ == '__main__':
    recommendations = get_recommendations(df_items, sys.argv[1])
    print(recommendations.head())
    