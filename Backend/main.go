package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"strconv"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Event struct {
	Date        string `json:"date"`
	Description string `json:"description"`
	Lang        string `json:"lang"`
	Category1   string `json:"category1"`
	Granularity string `json:"granularity"`
}

func randomData(res *gin.Context) {
	number, _ := strconv.Atoi(res.Param("number"))

	readFile, _ := ioutil.ReadFile("assets/history.json")
	stringData := string(readFile)
	eventCount := strings.Count(stringData, `"event"`)

	for i := 1; i <= eventCount; i++ {
		a := `"event`
		b := `": {`
		newKey := string(fmt.Sprintf("%s%d%s", a, i, b))
		stringData = strings.Replace(stringData, string(`"event": {`), newKey, 1)
	}

	var events map[string]interface{}
	json.Unmarshal([]byte(stringData), &events)

	var filteredEvents []interface{}

	for i := 1; i <= number; i++ {
		r := rand.Intn(eventCount-1) + 1
		a := "event"
		newKey := string(fmt.Sprintf("%s%d", a, r))
		filteredEvents = append(filteredEvents, events["result"].(map[string]interface{})[newKey])
	}

	res.JSON(200, gin.H{
		"message": filteredEvents,
	})
}
func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/getRandomData/:number", randomData)

	router.Run()
}
