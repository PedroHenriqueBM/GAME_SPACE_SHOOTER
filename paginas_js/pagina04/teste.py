import os
import sys
from cryptography.fernet import Fernet
import getpass

def generate_key(password):
    import hashlib
    return Fernet(base64.urlsafe_b64encode(hashlib.sha256(password.encode()).digest()))

def encrypt_files(folder, fernet):
    for root, _, files in os.walk(folder):
        for file in files:
            filepath = os.path.join(root, file)
            with open(filepath, 'rb') as f:
                data = f.read()
            encrypted = fernet.encrypt(data)
            with open(filepath + ".enc", 'wb') as f:
                f.write(encrypted)
            os.remove(filepath)

if _name_ == "_main_":
    folder_to_encrypt = r"C:\CAMINHO\DA\PASTA"
    password = getpass.getpass("Digite a senha de criptografia: ")
    fernet = generate_key(password)
    encrypt_files(folder_to_encrypt, fernet)
    print("Todos os arquivos foram criptografados.")