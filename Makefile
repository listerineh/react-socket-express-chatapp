prepare:
	cd ./client/ && npm install
	cd ./server/ && npm install

start-frontend:
	cd ./client/ && npm start

start-backend:
	cd ./server/ && npm start

start:
	$(MAKE) -j start-backend start-frontend 
