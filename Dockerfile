FROM nginx:1

# Remove the default config
RUN rm /etc/nginx/conf.d/default.conf

COPY portal.conf /etc/nginx/conf.d
COPY build /usr/share/nginx/html
