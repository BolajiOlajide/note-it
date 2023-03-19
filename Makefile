build-go:
	go build -o noteit ./cmd/api

build-ts:
	pnpm run build

build: build-go build-ts
