import requests


class ImageSeeder:
    def __init__(self, key):
        self.access_key = key

    def get_random_images(self):
        url = 'https://api.unsplash.com/photos/random/?client_id={}'.format(self.access_key)
        res = requests.get(url)

        response = res.json()

        return response

