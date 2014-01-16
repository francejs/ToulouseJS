init:
	npm install -g punch

start:
	sleep 2 && open http://localhost:3000/ &
	punch s 3000
