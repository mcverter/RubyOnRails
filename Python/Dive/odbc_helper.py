def build_connection_string(params):
    ''' build connection string from dicitonary 
    return string '''
    return ";".join(["%s=%s" % (k,v) for k,v in params.items()])

if __name__ == "__main__":
    myParams = { "server" : "mpilgrim",
                 "database": "master"}
    print buildConnectionString(myParams);
