FROM php:7.3-fpm

WORKDIR /app
ADD . .

RUN apt update && \
		curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt install -y curl git unzip nodejs && \
		curl -sS https://getcomposer.org/installer | php && \
		mv composer.phar /usr/local/bin/composer && \
		composer self-update && \
    docker-php-ext-install pdo_mysql mysqli mbstring

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]
