#! /bin/bash

capitalize() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    # add capitalized 1st letter
    output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
    # add lowercase version of rest of word
    output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
  done

  unset IFS

  capitalizeName=$output
}

camelCase() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    if [ ${words[0]} == $word ]
    then
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word}")"
    else
      output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
    fi
  done

  unset IFS

  camelCase=$output
}

clear

path=$1
name=$2

capitalize
camelCase

echo 'Create Component'

echo -ne '[                     ] creating component...                       \r'

mkdir $path/$capitalizeName

echo -ne '[###                  ] created folder!                       \r'
sleep 0.5

touch $path/$capitalizeName/index.ts
cat > $path/$capitalizeName/index.ts <<EOF
import $capitalizeName from './$capitalizeName';

export default $capitalizeName;
EOF

echo -ne '[######               ] created index!                       \r'
sleep 0.5

touch $path/$capitalizeName/$capitalizeName.tsx
cat > $path/$capitalizeName/$capitalizeName.tsx <<EOF
import React from 'react';
import * as S from './styles';

interface Props {

}

const $capitalizeName:React.FC<Props> = (props: Props) => {
    const {} = props
    return (
        <S.$capitalizeName>
            $capitalizeName
        </S.$capitalizeName>
    )
}

export default $capitalizeName;
EOF

echo -ne '[#########            ] created react component!                       \r'
sleep 0.5

touch $path/$capitalizeName/styles.ts
cat > $path/$capitalizeName/styles.ts <<EOF
import styled from 'styled-components';

const $capitalizeName = styled.div\`\`

export { $capitalizeName };

EOF

echo -ne '[##################   ] created styles!                       \r'
sleep 0.5

echo -ne '[#####################] created component!                       \r'
sleep 0.5

echo -ne '\n'
