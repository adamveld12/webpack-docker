build-dev:
	docker build -t webpack_dev -f ./Dockerfile.dev .

dev: build-dev
	docker run -v $$PWD:/usr/src/app -p 80:80 --rm -it webpack_dev
