#!/usr/bin/python
import psycopg2

def main():
    print "Initialize database"
    try:
        conn = psycopg2.connect(host="localhost",database="hapi", user="hapi", password="password")
        cursor = conn.cursor()
        createUserTableQuery = "CREATE TABLE IF NOT EXISTS users (id UUID PRIMARY KEY NOT NULL, username VARCHAR(128) NOT NULL, password VARCHAR(60) NOT NULL, email VARCHAR(128) NOT NULL)"
        createUserQuery = "INSERT INTO users (id, username, password, email) VALUES ('dffbe948-e5f3-48ce-ba79-f58c3a730b2b', 'Rich', '$2a$10$P9vahHQTmL4ONa/927IKNOstwWResLF75bZ17kn53j6MzMO2wXb0G', 'rich@mail.com')"

        cursor.execute(createUserTableQuery)
        cursor.execute(createUserQuery)
        conn.commit()
        cursor.close()
        conn.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    print "OK"

if __name__ == '__main__':
    main()