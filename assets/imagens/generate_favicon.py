#!/usr/bin/env python3
"""
Script para gerar favicon.ico a partir de SVG
Requer: pip install cairosvg pillow
"""

try:
    import cairosvg
    from PIL import Image
    import io
    
    # Converter SVG para PNG em diferentes tamanhos
    sizes = [16, 32, 48]
    images = []
    
    for size in sizes:
        png_data = cairosvg.svg2png(
            url='favicon.svg',
            output_width=size,
            output_height=size
        )
        img = Image.open(io.BytesIO(png_data))
        images.append(img)
    
    # Salvar como ICO
    images[0].save(
        'favicon.ico',
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=images[1:]
    )
    
    print("✓ favicon.ico gerado com sucesso!")
    
except ImportError:
    print("⚠ Bibliotecas não instaladas. Execute:")
    print("  pip install cairosvg pillow")
    print("\nAlternativamente, use um conversor online:")
    print("  https://convertio.co/svg-ico/")
    print("  https://cloudconvert.com/svg-to-ico")
