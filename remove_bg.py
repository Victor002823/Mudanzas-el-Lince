import PIL.Image as Image
import numpy as np

def remove_checkers(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Define what we consider "background"
    # In a typical checkerboard, it's pure white (255, 255, 255) 
    # and a light gray (often around 200-240).
    
    # Let's target pixels where R, G, B are very close to each other (gray/white)
    # and the brightness is high (> 180)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Condition: R, G, B are high and similar
    mask = (r > 150) & (g > 150) & (b > 150) & \
           (np.abs(r.astype(int) - g.astype(int)) < 10) & \
           (np.abs(r.astype(int) - b.astype(int)) < 10)
    
    # Apply transparency to the mask
    data[mask, 3] = 0
    
    new_img = Image.fromarray(data)
    new_img.save(output_path)

remove_checkers(r"c:\Users\NAVI\OneDrive\Documentos\pruebas html\LINCE_NEW\assets\logo.png", r"c:\Users\NAVI\OneDrive\Documentos\pruebas html\LINCE_NEW\assets\logo_transparent.png")
