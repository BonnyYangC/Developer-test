code-challenge:
	@make stop
	@make remove
	@make build
	@make run
	@make exec
build:
	docker build -t code-challenge .
run:
	docker run -dit --name code-challenge code-challenge
stop:
	docker stop code-challenge
remove:
	docker rm code-challenge
exec:
	docker exec -it code-challenge bash