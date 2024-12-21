# Gunakan image dasar Ubuntu
FROM ubuntu:20.04

# Non-interaktif agar tidak ada prompt selama instalasi
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    wine \
    nodejs \
    npm \
    unzip \
    && apt-get clean

# Set working directory
WORKDIR /app

# Salin file skrip Node.js ke dalam container
COPY index.js .

# Salin file package.json jika ada (opsional, hanya jika Anda memiliki dependencies lain)
COPY /app .

# Install dependencies Node.js (jika ada)
RUN npm install || true

# Jalankan aplikasi Node.js
CMD ["node", "index.js"]
