FROM php:8.2-cli

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY composer.json /app

RUN apt-get update
RUN apt-get install -y git
RUN composer install

COPY . /app

# CMD ["./vendor/bin/phpunit"]
CMD [ "php", "src/app.php" ]