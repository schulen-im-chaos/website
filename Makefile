build:
	npm run build
	cp -r static build/static
	cp package.json package-lock.json build/
	sh -c "cd build && npm ci --omit dev"

clean:
	rm -rf build

all: clean build
