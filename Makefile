build-go:
	go build -o noteit ./cmd/api

build-ts:
	pnpm run build

build: build-go build-ts

start-go:
	go run ./cmd/api

start-ts:
	pnpm run dev

start: start-ts start-go
