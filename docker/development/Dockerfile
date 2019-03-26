FROM php:7.3-fpm

RUN docker-php-ext-install pdo_mysql mysqli mbstring

WORKDIR /app
ADD . .
EXPOSE 8000

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]

