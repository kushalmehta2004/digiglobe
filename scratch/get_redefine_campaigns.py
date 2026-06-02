import urllib.request
import re
from bs4 import BeautifulSoup

url = "https://drive.google.com/drive/folders/1HbqGfjYUbfvvlVyrHLGD2ylPBgPCOxT6"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
    soup = BeautifulSoup(html, 'html.parser')
    rows = soup.find_all('tr', {'data-selectable': True, 'data-id': True})
    print("Number of selectable rows found:", len(rows))

    items = []
    for row in rows:
        file_id = row['data-id']
        aria_label = ""
        label_div = row.find(attrs={"aria-label": True})
        if label_div:
            aria_label = label_div['aria-label']
        else:
            aria_label = row.get('aria-label', '')
        text = row.get_text(separator=' ').strip()
        items.append({
            'id': file_id,
            'label': aria_label,
            'text': text
        })

    for item in items:
        print(f"ID: {item['id']} | Label: {item['label']} | Text: {item['text']}")
except Exception as e:
    print("Error:", e)
