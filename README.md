
## 此Demo關注的重點在於將專案部屬到server的子目錄後..

1. css等靜態資源要能夠正常載入
2. 路由可以正常導航


## 如何將此專案部屬到bitnami/nginx或nginx/alpine的子目錄上

```powershell
ng build --base-href /abc/
```

```powershell
docker image build -t abctest .
```

```powershell
docker container run --rm -d -p 4201:4200 abctest
```


## 相關image，擇一即可
* [binami/nginx image](https://hub.docker.com/r/bitnami/nginx)
* [nginx/alpine image](https://hub.docker.com/_/nginx)
