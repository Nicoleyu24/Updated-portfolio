import glob
import numpy as np
from PIL import Image

# Find the file that matches the pattern using glob
pattern = "/Users/yunick/.gemini/antigravity/brain/787ed7ff-4122-4d51-a728-c27ffdb7ba60/media__1773865387024.png"
files = glob.glob(pattern)

if not files:
    print("File not found.")
    exit(1)

file_path = files[0]
print(f"Loading {file_path}")

img = Image.open(file_path).convert("RGB")
data = np.array(img).reshape(-1, 3)

colors, counts = np.unique(data, axis=0, return_counts=True)
sorted_indices = np.argsort(counts)[::-1]

print("Top 20 colors (RGB):")
for i in range(20):
    idx = sorted_indices[i]
    print(f"{colors[idx]} - count: {counts[idx]}")
