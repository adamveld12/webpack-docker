dev: build-dev
	docker run -v $$PWD:/usr/src/app -p 80:80 --rm -it webpack_starter_dev

prod: build-prod
	docker run -p 80:80 --rm -it webpack_starter

build-prod:
	npm run prodbuild
	docker build -t webpack_starter .

build-dev:
	docker build -t webpack_starter_dev -f ./Dockerfile.dev .


