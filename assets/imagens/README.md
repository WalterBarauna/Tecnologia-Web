# Pasta de Imagens

Esta pasta contém os recursos visuais do projeto.

## Arquivos

### favicon.svg
Ícone vetorial do site (letra "W" em fundo azul).

### favicon.ico
Ícone do site em formato ICO para compatibilidade com navegadores.

## Como Gerar o Favicon

### Opção 1: Usando o Gerador HTML (Recomendado)
1. Abra o arquivo `favicon-generator.html` no navegador
2. Clique em "Gerar e Baixar Favicon"
3. O arquivo `favicon.ico` será baixado automaticamente
4. Mova o arquivo para esta pasta

### Opção 2: Usando Python
```bash
cd assets/imagens
pip install cairosvg pillow
python generate_favicon.py
```

### Opção 3: Conversor Online
Use um dos seguintes sites:
- https://convertio.co/svg-ico/
- https://cloudconvert.com/svg-to-ico
- https://favicon.io/

Faça upload do arquivo `favicon.svg` e baixe o resultado como `favicon.ico`.

## Otimização de Imagens

### Diretrizes
- Imagens devem ter menos de 500KB cada
- Use formatos modernos: WebP, AVIF (com fallback para JPG/PNG)
- Comprima imagens antes de adicionar ao projeto

### Ferramentas Recomendadas
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/ (Mac)
- **RIOT**: https://riot-optimizer.com/ (Windows)

### Comandos para Otimização

#### Usando ImageMagick
```bash
# Redimensionar e comprimir JPG
magick input.jpg -resize 1920x1080 -quality 85 output.jpg

# Converter para WebP
magick input.jpg -quality 80 output.webp
```

#### Usando cwebp (WebP)
```bash
cwebp -q 80 input.jpg -o output.webp
```

## Tamanhos Recomendados

### Favicon
- 16x16px (navegadores antigos)
- 32x32px (navegadores modernos)
- 48x48px (Windows)
- 180x180px (Apple Touch Icon)

### Imagens de Perfil
- Mínimo: 300x300px
- Recomendado: 500x500px
- Máximo: 1000x1000px

### Imagens de Fundo
- Desktop: 1920x1080px
- Mobile: 750x1334px

## Verificação de Tamanho

Para verificar o tamanho total das imagens:

### Windows (PowerShell)
```powershell
Get-ChildItem -Recurse | Measure-Object -Property Length -Sum
```

### Linux/Mac
```bash
du -sh .
```

## Status Atual

- ✓ favicon.svg criado (< 1KB)
- ⚠ favicon.ico precisa ser gerado
- ⚠ Imagem de perfil não adicionada (opcional)

## Notas

- O projeto deve ter menos de 2MB no total
- Priorize qualidade visual vs. tamanho do arquivo
- Use lazy loading para imagens abaixo da dobra
- Considere usar CDN para imagens grandes
