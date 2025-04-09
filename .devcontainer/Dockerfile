FROM mcr.microsoft.com/devcontainers/python:3.13

#  Set the working directory to the same path as `workspaceFolder` in `devcontainer.json`   
WORKDIR /workspaces/guidev-portfolio


ENV PYTHONUNBUFFERED=1

# [Optional] If your requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# Installs system dependencies required for PostgreSQL and Graphviz, and cleans up to reduce image size
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install --no-install-recommends \
   postgresql-client \
   graphviz \
   graphviz-dev \
&& rm -rf /var/lib/apt/lists/*  

# Ensure Node.js and npm are installed
RUN apt-get update && apt-get install -y nodejs npm \
    && npm install -g astro

#  Install `pipenv` globally
RUN pip install pipenv

#  Install `pyenv` and set up Python 3.12.3
RUN curl https://pyenv.run | bash 

ENV PYENV_ROOT="/root/.pyenv"
ENV PATH="${PYENV_ROOT}/bin:${PATH}"

#  Set up pyenv enviroment
RUN pyenv install 3.12.3 && pyenv global 3.12.3
#  Use the same path as `workspaceFolder` in `devcontainer.json`


#  Copy Pipfile and Pipfile.lock first to leverage Docker cache
COPY Pipfile Pipfile.lock ./
COPY ./../src/backend/ /workspaces/guidev-portfolio/backend/
COPY ./../src/frontend/ /workspaces/guidev-portfolio/frontend/


#  Install Python dependencies with `pipenv`
RUN pipenv install --dev --deploy --skip-lock


#  Copy the rest of the code after installing dependencies
COPY . ./
