# pull nginx image
FROM nginx:1.21.1-alpine

EXPOSE 4200

WORKDIR /usr/share/nginx/html

# 從第一階段的檔案copy
COPY ./dist/ng-deploy-nginx /usr/share/nginx/html

# 覆蓋image裡的設定檔
COPY ./nginx.conf /etc/nginx/nginx.conf
