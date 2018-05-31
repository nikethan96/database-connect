# Author Nikethan Selvanathan 


To create the Database

	MYSQL DATABASE INSTALL

		To create MYSQl Database in any instance through docker
			Install docker.
			Run command - 
				docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
			Now MYSQl is started check using command - 
				docker ps
		OR

		To create MYSQl Database through EXE
			Go through MYSQL page (https://dev.mysql.com/downloads/installer/)
			Get right installer by your OS.

	COUCH DATABASE INSTALL

		To create Couch Database in any instance through docker
			Install docker.
			Run command - 
				docker run --name my-couchdb -p 5984:5984 -d couchdb
			Now Couch database is started and UI is accessible in  http://127.0.0.1:5984/_utils/

		OR

		To create MYSQl Database through EXE
			Go through MYSQL page (http://docs.couchdb.org/en/2.0.0/install/unix.html)
			Get right installer or terminal command by your OS.

Docker 
	# Delete every Docker containers
	# Must be run first because images are attached to containers
		docker rm $(docker ps -a -q)

	# Delete every Docker image
		docker rmi $(docker images -q)


How to use
	Change Configurations.js file in cofig folder in Project root file system.
	Than add method(api/controllers/MySQLController) and swagger(api/swagger/swagger.yaml) routes to call them.