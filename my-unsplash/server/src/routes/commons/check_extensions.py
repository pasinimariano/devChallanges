def check_extensions(server, filename):
    extension_file = '.' in filename and filename.rsplit('.', 1)[1].lower() in server.config['IMAGES_ALLOWED_EXTENSIONS']

    return extension_file
