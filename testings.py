import os, environ
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
env = environ.Env(
    DEBUG = (bool, False)
)
environ.Env.read_env(os.path.join( BASE_DIR, '.env'))

print (env.__contains__('DB_ENGINE'))


DATABASES = {
    'default': {
        'ENGINE': env('DB_ENGINE'),
        'NAME': env('DB_NAME'),
        'PORT': env.int('DB_PORT'),
        'HOST': env('DB_HOST'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PASSWORD'),

    }
}
for i in DATABASES['default'] :
    print(type(DATABASES['default'][i]), end=' - >')
    print([i], end=' - >')
    print(DATABASES['default'][i])

import psycopg2


con=psycopg2.connect