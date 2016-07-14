FROM octohost/nginx:1.8

COPY ./public /srv/www

EXPOSE 80

CMD nginx
