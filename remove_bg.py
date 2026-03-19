from rembg import remove
from PIL import Image
import glob

pattern = "Screenshot 2025-11-26 at 6.03.21*.png"
files = glob.glob(pattern)

if not files:
    print("Image not found")
    exit(1)

input_path = files[0]
output_path = "N.png"

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print(f"Saved to {output_path}")
