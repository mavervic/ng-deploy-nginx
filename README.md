
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

訪問: [localhost:4201](http://localhost:4201)

<details>
  <summary>CPU相關路徑</summary>

  * [Apple](http://localhost:4201/PC/CPU/Index)
  * [Intel](http://localhost:4201/PC/CPU/intel)
  * [Amd](http://localhost:4201/PC/CPU/amd)
</details>

<details>
  <summary>MONITOR相關路徑</summary>

  * [BenQ](http://localhost:4201/PC/MONITOR/Index)
  * [Acer](http://localhost:4201/PC/MONITOR/acer)
  * [AOC](http://localhost:4201/PC/MONITOR/aoc)
</details>

## 相關image，擇一即可
* [binami/nginx image](https://hub.docker.com/r/bitnami/nginx)
* [nginx/alpine image](https://hub.docker.com/_/nginx)
