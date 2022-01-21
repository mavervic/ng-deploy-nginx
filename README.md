
## 此Demo關注的重點在於將專案部屬到server後..

1. css等靜態資源要能夠正常載入
2. 路由可以正常導航

## 如何將此專案部屬到bitnami/nginx或nginx/alpine上

```powershell
ng build
```

```powershell
docker image build -t abctest .
```

```powershell
docker container run --rm -d -p 4201:4200 abctest
```

訪問: [localhost:4201](localhost:4201)

## 相關image，擇一即可
* [binami/nginx image](https://hub.docker.com/r/bitnami/nginx)
* [nginx/alpine image](https://hub.docker.com/_/nginx)
