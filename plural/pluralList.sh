echo "sleepy"

declare -a list=(  )

for item in "${list[@]}"
do
    echo $item
done

echo "working"


for item in "${list[@]}"
do
    echo $item
    youtube-dl --verbose --username mcv-mhe --password kowloon555 --flat-playlis\
t "https://app.pluralsight.com/courses/$item"
    sleep 90
done