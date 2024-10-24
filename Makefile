code-challenge:
	@make stop
	@make remove
	@make remove-image
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
remove-image:
	docker image rm -f code-challenge

docker-compose-build:
	docker-compose build
docker-compose-run:
	docker run -dit --name code-challenge developer-test-code-challenge-docker