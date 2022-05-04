def user_routes(server):
    @server.route('/user', methods=['GET'])
    def test():
        return 'HELLO WORLD'
