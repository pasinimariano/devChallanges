import base64


def render_image(data):
    render = base64.b64encode(data).decode('ascii')
    return render
