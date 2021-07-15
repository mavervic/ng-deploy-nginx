# pull nginx image
FROM registry.groupt.fbt.com/tpebnkapbankt/nginx:1.21.1

# 從第一階段的檔案copy
COPY ./dist/ng-deploy-nginx /var/www/html/abc

# 覆蓋image裡的設定檔
COPY ./nginx-custom.conf /opt/bitnami/nginx/conf/server_blocks/my_server_block.conf
